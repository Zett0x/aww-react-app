import { types } from "../types/types";

const initialState = {
  after: null,
  loading: false,
  records: [],
  lastRecord: null,
};

export const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.recordsSetLast:
      return {
        ...state,
        lastRecord: state.records[state.records.length - 1],
      };

    case types.recordsSetRecords:
      return {
        ...state,
        records: [...new Set([...state.records, ...action.payload])],
      };

    case types.recordsSetAfter:
      return {
        ...state,
        after: action.payload,
      };

    case types.recordsSetLoading:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
