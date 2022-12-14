// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }
  try {
    if (req.body.payload.payment.entity.status !== "captured") {
      return res.status(400).send({ message: "Payment not captured" });
    }
    const order_id = req.body?.payload?.payment?.entity?.order_id || "";
    const paymentOrder = await prisma.paymentOrder.update({
      where: {
        orderId: order_id,
      },
      data: {
        captured: true,
        paymentInfo: req.body,
      },
    });

    if (!paymentOrder) {
      return res.status(400).send({ message: "Payment Order not found" });
    }
    const registered = await prisma.registered.create({
      data: {
        user: {
          connect: {
            id: paymentOrder.userId,
          },
        },
        event: {
          connect: {
            id: paymentOrder.eventId,
          },
        },
      },
    });
    if (!registered) {
      return res.status(400).send({ message: "Registration failed" });
    }
    return res.status(200).json({ status: "OK" });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}
