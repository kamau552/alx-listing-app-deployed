import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("Booking data received:", req.body);
    return res.status(200).json({ message: "Booking confirmed!" });
  }

  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ message: `Method ${req.method} not allowed` });
}
