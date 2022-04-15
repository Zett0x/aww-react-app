import axios from "axios";
import { API_URL, LIMIT_RESULTS } from "../constants/constants";
import { fixFetchData } from "../utils/fixFetchData";

export const fetchRedditData = async (afterParam) => {
  console.log("fetch called");
  const req = await axios.get(
    `${API_URL.slice(0, -1)}.json?&limit=${LIMIT_RESULTS}${
      afterParam ? "?&after=" + afterParam : ""
    }`
  );

  const { after, children } = req.data.data;

  const obj = {
    after,
    records: [...fixFetchData(children)],
  };

  return obj;
};
