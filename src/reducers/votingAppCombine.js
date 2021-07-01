import { combineReducers } from "redux";
import { electionsReducer } from "./election-tool";
import { registrationsReducer } from "./registration-tool";

export const votingAppCombineReducer = combineReducers({
    registrations: registrationsReducer,
    elections: electionsReducer,
});
