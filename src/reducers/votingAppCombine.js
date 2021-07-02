import { combineReducers } from "redux";
import {
    electionResultsReducer,
    electionsReducer,
    propositionsReducer,
  } from "./election-tool";
import { registrationsReducer, viewSwitchReducer, voterEditReducer } from "./registration-tool";

export const votingAppCombineReducer = combineReducers({
    voters: registrationsReducer,
    viewSwitch: viewSwitchReducer,
    voterEdit: voterEditReducer,
    elections: electionsReducer,
    propositions: propositionsReducer,
    electionResults: electionResultsReducer,
});
