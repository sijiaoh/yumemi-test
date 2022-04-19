import { fetchPrefectures } from "../../src/server/fetchPrefectures";
import { samplePrefectures } from "../samplePrefectures";

test("Fetch prefectures data from resas api.", async () => {
  const prefectures = await fetchPrefectures();

  expect(prefectures).toEqual(samplePrefectures);
});
