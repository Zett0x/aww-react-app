import { types } from "../types/types";

const initialState = {
  after: null,
  loading: false,
  records: [],
};

export const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.recordsSetRecords:
      return {
        ...state,
        //records: [...new Set([...state.records, ...action.payload])], //, HERE YOU WILL GET NEW POSTS AND OLD
        //records: [...action.payload],

        records: state.records.concat(action.payload),
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
