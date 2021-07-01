import { createStore } from "redux";

import { votingAppCombineReducer } from '../reducers/votingAppCombine';

export const votingAppStore = createStore(votingAppCombineReducer);