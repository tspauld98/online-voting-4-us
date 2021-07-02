export const VALIDATE_USER_INFO_REQUEST_ACTION = "VALIDATE_USER_INFO_REQUEST";
export const VALIDATE_USER_INFO_DONE_ACTION = "VALIDATE_USER_INFO_DONE";
export const GET_CURRENT_BALLOT_DATA_ACTION = "GET_CURRENT_BALLOT_DATA";
export const SET_CURRENT_BALLOT_DATA_ACTION = "SET_CURRENT_BALLOT_DATA";
export const SET_ERROR_ACTION = 'SET_ERROR';

export const createValidateUserInfoAction = (voterId, ballotId) => {
    return dispatch => {
        dispatch(createValidateUserInfoRequestAction());
        return fetch('http://localhost:3060/voters/' + encodeURIComponent(voterId))
        .then((res) => {
            if (res.status === 404) {
                dispatch(createSetErrorAction())
            } else {
                console.log("success");
                dispatch(createValidateUserInfoDoneAction(voterId))
                dispatch(getBallotData(ballotId))
            }
        })
    }
}

export const createSetErrorAction = () => ({
    type: SET_ERROR_ACTION,
    message: "This ID is invalid."
})

export const getBallotData = (ballotId) => {
    return dispatch => {
        return fetch('http://localhost:3060/elections/' + encodeURIComponent(ballotId))
        .then(res => res.json())
        .then(ballot => dispatch(createGetCurrentBallotDataAction(ballot)))
    }
}

export const createValidateUserInfoRequestAction = () => ({
    type: VALIDATE_USER_INFO_REQUEST_ACTION
});

export const createValidateUserInfoDoneAction = (voterId) => ({
    type: VALIDATE_USER_INFO_DONE_ACTION,
    voterId
});

export const createGetCurrentBallotDataAction = (ballot) => ({
    type: GET_CURRENT_BALLOT_DATA_ACTION,
    ballot
});

export const createSetCurrentBallotDataAction = (ballot) => ({
    type: SET_CURRENT_BALLOT_DATA_ACTION,
    ballot
});

export const setBallotData = (ballot) => {
    return dispatch => {
        return fetch('http://localhost:3060/elections/' + encodeURIComponent(ballot.id), {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ballot),
        })
        .then(dispatch(createValidateUserInfoRequestAction()));
    }
}