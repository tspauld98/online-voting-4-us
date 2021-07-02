export const VALIDATE_USER_INFO_REQUEST_ACTION = "VALIDATE_USER_INFO_REQUEST";
export const VALIDATE_USER_INFO_DONE_ACTION = "VALIDATE_USER_INFO_DONE";
export const GET_CURRENT_BALLOT_DATA_ACTION = "GET_CURRENT_BALLOT_DATA";
export const SET_CURRENT_BALLOT_DATA_ACTION = "SET_CURRENT_BALLOT_DATA";

export const SET_ELECTION_ALREADY_VOTED_ACTION = "SET_ELECTION_ALREADY_VOTED";
export const CLEAR_ELECTION_ALREADY_VOTED_ACTION =
  "CLEAR_ELECTION_ALREADY_VOTED";

export const createValidateUserInfoAction = (voterId) => {
  return (dispatch) => {
    dispatch(createValidateUserInfoRequestAction());
    return fetch(
      "http://localhost:3060/voters/" + encodeURIComponent(voterId)
    ).then((res) => {
      if (res.status === 404) {
      } else {
        console.log("success");
        dispatch(createValidateUserInfoDoneAction(voterId));
      }
    });
  };
};

export const createValidateUserInfoRequestAction = () => ({
  type: VALIDATE_USER_INFO_REQUEST_ACTION,
});

export const createValidateUserInfoDoneAction = (voterId) => ({
  type: VALIDATE_USER_INFO_DONE_ACTION,
  voterId,
});

export const createGetCurrentBallotDataAction = (ballot) => ({
  type: GET_CURRENT_BALLOT_DATA_ACTION,
  ballot,
});

export const createSetElectionAlreadyVotedAction = (value) => ({
  type: SET_ELECTION_ALREADY_VOTED_ACTION,
  value,
});

export const createClearElectionAlreadyVotedAction = () => ({
  type: CLEAR_ELECTION_ALREADY_VOTED_ACTION,
  value: false,
});

export const createSetCurrentBallotDataAction = (ballot) => ({
  type: SET_CURRENT_BALLOT_DATA_ACTION,
  ballot,
});

export const setBallotData = (ballot) => {
  console.log(ballot);
  return (dispatch) => {
    return fetch(
      "http://localhost:3060/elections/" + encodeURIComponent(ballot.id),
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ballot),
      }
    ).then(dispatch(createValidateUserInfoRequestAction()));
    // .then(() => fetch('http://localhost:3000/'))
  };
};
