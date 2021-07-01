export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';

export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER';
export const UPDATE_VOTER_REQUEST_ACTION = 'UPDATE_VOTER';
export const REMOVE_VOTER_REQUEST_ACTION = 'REMOVE_VOTER';

export const createRefreshVotersRequestAction = () => ({type: REFRESH_VOTERS_REQUEST_ACTION});
export const createRefreshVotersDoneAction = value => ({type: REFRESH_VOTERS_DONE_ACTION, value});

export const refreshVoters = () => {
  return (dispatch) => {
    dispatch(createRefreshVotersRequestAction());
    return fetch("http://localhost:3060/voters")
      .then(res => res.json())
      .then(voters => dispatch(createRefreshVotersDoneAction(voters)));
  };
};

export const createAddVoterRequestAction = () => ({type: ADD_VOTER_REQUEST_ACTION});
export const createUpdateVoterRequestAction = () => ({type: UPDATE_VOTER_REQUEST_ACTION});
export const createRemoveVoterRequestAction = () => ({type: REMOVE_VOTER_REQUEST_ACTION});

export const addVoter = (voter) => {
  return (dispatch) => {
    dispatch(createAddVoterRequestAction());
    return fetch("http://localhost:3060/voters", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(voter)
    }).then(() => dispatch(refreshVoters()));
  };
}

export const updateVoter = (voter) => {
  return (dispatch) => {
    dispatch(createUpdateVoterRequestAction());
    return fetch("http://localhost:3060/voter/" + encodeURIComponent(voter.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(voter)
    }).then(() => dispatch(refreshVoters()));
  };
};

export const remoteVoter = (voter) => {
  return (dispatch) => {
    dispatch(createRemoveVoterRequestAction());

    voter.removed = true;
    
    return fetch("http://localhost:3060/voter/" + encodeURIComponent(voter.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(voter)
    }).then(() => dispatch(refreshVoters()));
  };
};
