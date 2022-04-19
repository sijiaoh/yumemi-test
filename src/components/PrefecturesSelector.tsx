import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { prefecturesState } from "../states/prefecturesState";
import { Prefectures } from "../types/Prefectures";

export function PrefecturesSelector() {
  const [prefectures, setPrefectures] = useRecoilState(prefecturesState);

  useEffect(() => {
    axios
      .get<unknown, { data: Prefectures }>("/api/prefectures")
      .then((response) => {
        setPrefectures(response.data);
      });
  }, [setPrefectures]);

  return (
    <div>
      {prefectures.map((prefecture) => (
        <div key={prefecture.prefCode}>{prefecture.prefName}</div>
      ))}
    </div>
  );
}
