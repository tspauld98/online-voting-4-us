import {
  APPEND_ELECTION_ACTION,
  APPEND_PROPOSITION_ACTION,
  CLEAR_PROPOSITIONS_ACTION,
  REFRESH_ELECTIONS_DONE_ACTION,
  LOAD_ELECTION_DONE_ACTION,
} from "../actions/election-tool";

export const electionsReducer = (elections = [], action) => {
  switch (action.type) {
    case REFRESH_ELECTIONS_DONE_ACTION:
      return action.value;
    case APPEND_ELECTION_ACTION:
      return [
        ...elections,
        {
          ...action.value,
          id: Math.max(...elections.map((e) => e.id), 0) + 1,
        },
      ];
    default:
      return elections;
  }
};

export const propositionsReducer = (propositions = [], action) => {
  switch (action.type) {
    case APPEND_PROPOSITION_ACTION:
      return [...propositions, action.value];
    case CLEAR_PROPOSITIONS_ACTION:
      return [];
    default:
      return propositions;
  }
};

export const electionResultsReducer = (electionResults = {}, action) => {
  switch (action.type) {
    case LOAD_ELECTION_DONE_ACTION:
      return action.value;
    default:
      return electionResults;
  }
};
