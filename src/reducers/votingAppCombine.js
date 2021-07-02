import { combineReducers } from "redux";
import {
    electionResultsReducer,
    electionsReducer,
    propositionsReducer,
  } from "./election-tool";
import { registrationsReducer, viewSwitchReducer, voterEditReducer, voterSortReducer } from "./registration-tool";
import { validationReducer, errorMessageReducer, electionAlreadyVotedReducer } from "./votes-tool";

export const votingAppCombineReducer = combineReducers({
    voters: registrationsReducer,
    viewSwitch: viewSwitchReducer,
    voterEdit: voterEditReducer,
    voterSort: voterSortReducer,
    userId: validationReducer,
    errorMessage: errorMessageReducer,
    alreadyVotedFlag: electionAlreadyVotedReducer,
    elections: electionsReducer,
    propositions: propositionsReducer,
    electionResults: electionResultsReducer,
});
