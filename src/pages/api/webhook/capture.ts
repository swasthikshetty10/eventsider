// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }
  // req.body.payload.payment.entity.order_id
  try {
    return res.status(200).json({ status: "OK" });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}
