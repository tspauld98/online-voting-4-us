import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { UserValidationForm } from '../components/UserValidationForm';
import {createValidateUserInfoAction} from '../actions/votes-tool.js';
import { Ballot } from '../components/Ballot';

export const CaptureVoteContainer = () => {

    const validation = useSelector(state => state.validation);
  
    const dispatch = useDispatch();
  
    const validationActions = useMemo(() => bindActionCreators({
      onValidateUserInfo : createValidateUserInfoAction
    }, dispatch), [dispatch]);

    return (
    <>
        <UserValidationForm validation={validation} {...validationActions}/>
        { validation && <Ballot /> }
    </>
    );
}