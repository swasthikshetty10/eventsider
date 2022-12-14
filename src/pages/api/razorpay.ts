import Razorpay from "razorpay";
import shortid from "shortid";
import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { prisma } from "../../server/db/client";
import { authOptions } from "./auth/[...nextauth]";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const session = await unstable_getServerSession(req, res, authOptions);
  const { eventId } = req.body;
  console.log(session);
  if (session?.user) {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const userData = await prisma.user.findUnique({
      where: {
        email: session.user.email || "",
      },
    });
    const eventData = await prisma.events.findUnique({
      where: {
        id: eventId,
      },
    });

    const payment_capture = 1;
    const amount = eventData?.registrationFee || 1;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);

      return res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
        name: userData?.name,
        email: userData?.email,
      });

      //   return res.status(401).json({
      //     message: "No Permission",
      //   });
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
}
