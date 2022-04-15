import { types } from "../types/types";

import { fetchRedditData } from "../api/fetchRedditData";

export const setRecords = (records) => ({
  type: types.recordsSetRecords,
  payload: records,
});

export const setAfter = (after) => ({
  type: types.recordsSetAfter,
  payload: after,
});

export const setLoading = (loading) => ({
  type: types.recordsSetLoading,
  payload: loading,
});

export const startLoadingRecords = (afterParam) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const { after, records } = await fetchRedditData(afterParam);

    dispatch(setAfter(after));
    dispatch(setRecords(records));

    dispatch(setLoading(false));
  };
};
