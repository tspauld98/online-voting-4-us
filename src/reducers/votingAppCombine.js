import { combineReducers } from "redux";
import { electionsReducer } from "./election-tool";

export const votingAppCombineReducer = combineReducers({
    elections: electionsReducer
});
