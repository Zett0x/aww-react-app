import axios from "axios";
import { API_URL, LIMIT_RESULTS } from "../constants/constants";

export const fetchRedditData = async (
  afterParam,
  setRecords,
  setAfterParam,
  setBeforeParam,
  setLoading,
  oldRecords
) => {
  setLoading(true);
  const req = await axios.get(
    `${API_URL.slice(0, -1)}.json?&limit=${LIMIT_RESULTS}${
      afterParam ? "?&after=" + afterParam : ""
    }`
  );

  const { after, before, children } = req.data.data;
  //let all = new Set(...oldRecords, ...children);
  //console.log(all);
  setAfterParam(after);
  setBeforeParam(before);
  setRecords(children);
  setLoading(false);
};
