import { combineReducers } from "redux";
import { electionsReducer } from "./election-tool";


const votersReducer = (voters=[], action) => {
    return action.voters ? action.voters : voters;
}

export const votingAppCombineReducer = combineReducers({
    voters: votersReducer,
    elections: electionsReducer
});
