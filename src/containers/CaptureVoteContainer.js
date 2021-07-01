import { useMemo, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { UserValidationForm } from '../components/UserValidationForm';
import {createValidateUserInfoAction} from '../actions/votes-tool.js';


export const CaptureVoteContainer = () => {

    const validation = useSelector(state => state.validation);
  
    const dispatch = useDispatch();
  
    const actions = useMemo(() => bindActionCreators({
      onValidateUserInfo : createValidateUserInfoAction
    }, dispatch), [dispatch]);

    return (
    <>
        <UserValidationForm validation = {validation} {...actions}/>
    </>
    );
}