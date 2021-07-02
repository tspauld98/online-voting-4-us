import { combineReducers } from "redux";
import { electionsReducer,
  electionsReducer,
  propositionsReducer, 
} from "./election-tool";
import { validationReducer } from "./votes-tool";


export const votingAppCombineReducer = combineReducers({
    validation: validationReducer,
    elections: electionsReducer,
    propositions: propositionsReducer,
    electionResults: electionResultsReducer,
});
