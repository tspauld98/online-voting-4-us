import { combineReducers } from "redux";
import {
  electionsReducer,
  electionResultsReducer,
  propositionsReducer,
} from "./election-tool";
import { validationReducer, errorMessageReducer, electionAlreadyVotedReducer } from "./votes-tool";

export const votingAppCombineReducer = combineReducers({
  userId: validationReducer,
  elections: electionsReducer,
  propositions: propositionsReducer,
  electionResults: electionResultsReducer,
  selectedBallot: electionResultsReducer,
  errorMessage: errorMessageReducer,
  alreadyVotedFlag: electionAlreadyVotedReducer,
});
