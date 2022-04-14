import axios from "axios";
import { API_URL, LIMIT_RESULTS } from "../constants/constants";
import { fixFetchData } from "../utils/fixFetchData";

export const fetchRedditData = async (
  afterParam,
  setRecords,
  setAfterParam,
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
  const all = new Set([...oldRecords, ...fixFetchData(children)]);

  setAfterParam(after);
  setRecords([...all]);

  // setRecords((oldRecords) => [
  //   ...new Set([...oldRecords, ...fixFetchData(children)]),
  // ]);
  //setRecords([...fixFetchData(children)]);
  setLoading(false);
};
