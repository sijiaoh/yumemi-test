import axios from "axios";
import { Prefectures } from "../types/Prefectures";

export async function fetchPrefectures() {
  const apiKey = process.env.RESAS_API_KEY;
  if (apiKey == null) throw new Error("process.env.RESAS_API_KEY is required.");

  const response = await axios.get<
    unknown,
    { data: { messages: string; result: Prefectures } }
  >("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
    headers: { "X-API-KEY": apiKey },
  });
  return response.data.result;
}
