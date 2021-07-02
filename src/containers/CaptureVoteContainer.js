import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { UserValidationForm } from '../components/UserValidationForm';
import {createValidateUserInfoAction} from '../actions/votes-tool.js';
import { Ballot } from '../components/Ballot';

export const CaptureVoteContainer = () => {

    const validation = useSelector(state => state.validation);
    const ballot = useSelector(state => state.ballot);
    const ballotId = 1; //get data here
  
    const dispatch = useDispatch();
  
    const validationActions = useMemo(() => bindActionCreators({
      onValidateUserInfo : createValidateUserInfoAction
    }, dispatch), [dispatch]);

    return (
    <>
        <UserValidationForm validation={validation} ballotId={ballotId} {...validationActions}/>
        { validation && <Ballot ballot={ballot}/> }
        { !validation && <h1> this ID is invalid </h1> }
    </>
    );
}