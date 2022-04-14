import { combineReducers } from "redux";

import { recordsReducer } from "./recordsReducer";

export const rootReducer = combineReducers({
  records: recordsReducer,
});
