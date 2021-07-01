import { useEffect, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { createRegisterVoterAction, createViewVotersAction, createResetViewAction, refreshVoters, addVoter, updateVoter, removeVoter } from '../actions/registration-tool';

export const useVoterRoll = () => {

  const voters = useSelector(state => state.voters);

  const viewSwitch = useSelector(state => state.viewSwitch);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    registerVoter: createRegisterVoterAction,
    viewVoters: createViewVotersAction,
    viewRegisterMain: createResetViewAction,
    refreshVoters: refreshVoters,
    addVoter: addVoter,
    updateVoter: updateVoter,
    removeVoter: removeVoter,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.refreshVoters();
  }, [actions]);

  return {
    voters,
    viewSwitch,
    ...actions,
  };

};
