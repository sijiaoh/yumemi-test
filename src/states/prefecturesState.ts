import { atom } from "recoil";
import { Prefectures } from "../types/Prefectures";

export const prefecturesState = atom<Prefectures>({
  key: "prefecturesState",
  default: [],
});
