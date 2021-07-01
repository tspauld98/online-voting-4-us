import { combineReducers } from "redux";
import {
    electionResultsReducer,
    electionsReducer,
    propositionsReducer,
  } from "./election-tool";
import { registrationsReducer, viewSwitchReducer } from "./registration-tool";

export const votingAppCombineReducer = combineReducers({
    voters: registrationsReducer,
    viewSwitch: viewSwitchReducer,
    elections: electionsReducer,
    propositions: propositionsReducer,
    electionResults: electionResultsReducer,
});
