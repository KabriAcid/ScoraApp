import { NextApiRequest, NextApiResponse } from "next";
import { standingsData } from "@/data/standings";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(standingsData);
}
