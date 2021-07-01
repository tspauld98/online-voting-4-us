import { combineReducers } from "redux";
import {
  electionResultsReducer,
  electionsReducer,
  propositionsReducer,
} from "./election-tool";

export const votingAppCombineReducer = combineReducers({
  elections: electionsReducer,
  propositions: propositionsReducer,
  electionResults: electionResultsReducer,
});
