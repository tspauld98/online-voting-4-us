import { combineReducers } from "redux";
import { electionsReducer } from "./election-tool";
import { registrationsReducer, viewSwitchReducer } from "./registration-tool";

export const votingAppCombineReducer = combineReducers({
    voters: registrationsReducer,
    viewSwitch: viewSwitchReducer,
    elections: electionsReducer,
});
