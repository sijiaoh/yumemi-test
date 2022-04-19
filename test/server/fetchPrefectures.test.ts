import fs from "fs/promises";
import { fetchPrefectures } from "../../src/server/fetchPrefectures";

test("Fetch prefectures data from resas api.", async () => {
  const prefectures = await fetchPrefectures();

  const sampleJson = await fs
    .readFile("./test/server/fetchPrefectures/sample.json")
    .then((buffer) => buffer.toString());
  const sample = JSON.parse(sampleJson);

  expect(prefectures).toEqual(sample);
});
