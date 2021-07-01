import { combineReducers } from "redux";
import { electionsReducer } from "./election-tool";
import { validationReducer } from "./votes-tool";


export const votingAppCombineReducer = combineReducers({
    validation: validationReducer,
    elections: electionsReducer
});
