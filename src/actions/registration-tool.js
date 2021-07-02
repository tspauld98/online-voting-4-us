export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';

export const REGISTER_VOTER_ACTION = 'REGISTER_VOTER';
export const VIEW_VOTERS_ACTION = 'VIEW_VOTERS';
export const RESET_VIEW_ACTION = 'RESET_VIEW';
export const SET_VOTER_SORT_ACTION = 'SET_VOTER_SORT';

export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';

export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER';
export const UPDATE_VOTER_REQUEST_ACTION = 'UPDATE_VOTER';
export const REMOVE_VOTER_REQUEST_ACTION = 'REMOVE_VOTER';

export const createEditVoterAction = value => ({type: EDIT_VOTER_ACTION, value});
export const createCancelEditVoterAction = () => ({type: CANCEL_VOTER_ACTION});

export const createRegisterVoterAction = () => ({type: REGISTER_VOTER_ACTION});
export const createViewVotersAction = () => ({type: VIEW_VOTERS_ACTION});
export const createResetViewAction = () => ({type: RESET_VIEW_ACTION});
export const createSetVoterSortAction = value => ({type: SET_VOTER_SORT_ACTION, value});

export const createRefreshVotersRequestAction = () => ({type: REFRESH_VOTERS_REQUEST_ACTION});
export const createRefreshVotersDoneAction = value => ({type: REFRESH_VOTERS_DONE_ACTION, value});

export const refreshVoters = () => {
  return (dispatch) => {
    dispatch(createRefreshVotersRequestAction());
    return fetch("http://localhost:3060/voters")
      .then(res => res.json())
      .then(voters => {
        
        dispatch(createRefreshVotersDoneAction([
          ...voters
        ].filter(item => item.removed !== true)));
      });
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
    return fetch("http://localhost:3060/voters/" + encodeURIComponent(voter.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(voter)
    }).then(() => dispatch(refreshVoters()));
  };
};

export const removeVoter = (voter) => {
  return (dispatch) => {
    dispatch(createRemoveVoterRequestAction());
    return fetch("http://localhost:3060/voters/" + encodeURIComponent(voter.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        ...voter,
        removed: true,
      })
    }).then(() => dispatch(refreshVoters()));
  };
};
