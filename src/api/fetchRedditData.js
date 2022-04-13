import axios from "axios";
import { API_URL } from "../constants/constants";

export const fetchRedditData = async (
  afterParam,
  setRecords,
  setAfterParam,
  setBeforeParam,
  setLoading
) => {
  setLoading(true);
  const req = await axios.get(
    `${API_URL}.json${afterParam ? "&after=" + afterParam : ""}`
  );

  const { after, before, children } = req.data.data;
  setAfterParam(after);
  setBeforeParam(before);
  setRecords(children);
  setLoading(false);
};
