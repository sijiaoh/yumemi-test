// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  fetchPrefectures,
  Prefectures,
} from "../../src/server/fetchPrefectures";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Prefectures>
) {
  res.status(200).json(await fetchPrefectures());
}
