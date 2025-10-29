import { NextApiRequest, NextApiResponse } from "next";
import { fixturesCalendar } from "@/data/fixturesCalendar";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(fixturesCalendar);
}
