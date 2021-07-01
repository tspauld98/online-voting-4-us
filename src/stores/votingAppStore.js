import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { votingAppCombineReducer } from "../reducers/votingAppCombine";

export const votingAppStore = createStore(
  votingAppCombineReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
