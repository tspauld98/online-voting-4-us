export const APPEND_ELECTION_ACTION = "APPEND_ELECTION";
export const APPEND_PROPOSITION_ACTION = "APPEND_PROPOSITION";
export const CLEAR_PROPOSITIONS_ACTION = "CLEAR_PROPOSITIONS";
export const SET_CURRENT_ELECTION_ACTION = "SET_CURRENT_ELECTION";
export const CANCEL_CURRENT_ELECTION_ACTION = "CANCEL_CURRENT_ELECTION";

export const REFRESH_ELECTIONS_REQUEST_ACTION = "REFRESH_ELECTIONS_REQUEST";
export const REFRESH_ELECTIONS_DONE_ACTION = "REFRESH_ELECTIONS_DONE";

export const LOAD_ELECTION_REQUEST_ACTION = "LOAD_ELECTION_REQUEST";
export const LOAD_ELECTION_DONE_ACTION = "LOAD_ELECTION_DONE";

export const APPEND_ELECTION_REQUEST_ACTION = "APPEND_ELECTION_REQUEST";

export const createAppendElectionAction = (value) => ({
  type: APPEND_ELECTION_ACTION,
  value,
});

export const createAppendPropositionAction = (value) => ({
  type: APPEND_PROPOSITION_ACTION,
  value,
});

export const createClearPropositionsAction = () => ({
  type: CLEAR_PROPOSITIONS_ACTION,
});

export const createRefreshElectionsRequestAction = () => ({
  type: REFRESH_ELECTIONS_REQUEST_ACTION,
});

export const createRefreshElectionsDoneAction = (elections) => ({
  type: REFRESH_ELECTIONS_DONE_ACTION,
  value: elections,
});

export const createLoadElectionRequestAction = () => ({
  type: LOAD_ELECTION_REQUEST_ACTION,
});

export const createLoadElectionDoneAction = (election) => ({
  type: LOAD_ELECTION_DONE_ACTION,
  value: election,
});

export const createAppendElectionRequestAction = () => ({
  type: APPEND_ELECTION_REQUEST_ACTION,
});

export const refreshElections = () => {
  return (dispatch) => {
    dispatch(createRefreshElectionsRequestAction());

    return fetch("http://localhost:3060/elections")
      .then((res) => res.json())
      .then((elections) =>
        dispatch(createRefreshElectionsDoneAction(elections))
      );
  };
};

export const loadElection = (electionId) => {
  return (dispatch) => {
    dispatch(createLoadElectionRequestAction());

    return fetch(
      "http://localhost:3060/elections/" + encodeURIComponent(electionId)
    )
      .then((res) => res.json())
      .then((election) => dispatch(createLoadElectionDoneAction(election)));
  };
};

export const appendElection = (election) => {
  return (dispatch) => {
    dispatch(createAppendElectionAction());

    const propositions = election.propositionQuestions
      ? election.propositionQuestions.map((proposition) => ({
          description: proposition,
          votesFor: 0,
        }))
      : [];

    const electionEntity = {
      title: election.title,
      voterIds: [],
      propositions,
    };

    return fetch("http://localhost:3060/elections", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(electionEntity),
    })
      .then(() => dispatch(createClearPropositionsAction()))
      .then(() => dispatch(refreshElections()));
  };
};
