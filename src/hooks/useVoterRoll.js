import { useEffect, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { refreshVoters, addVoter, updateVoter, removeVoter } from '../actions/registration-tool';

export const useVoterRoll = () => {

  const voters = useSelector(state => state.voters);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
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
    ...actions,
  };

};
