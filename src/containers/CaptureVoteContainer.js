import { useMemo, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { UserValidationForm } from '../components/UserValidationForm';


export const CaptureVoteContainer = () => {

    // const voters = useSelector(state => state.voters);
  
    // const dispatch = useDispatch();
  
    // const actions = useMemo(() => bindActionCreators({
    //   onValidateUserInfo : validateUserInfoAction
    // }, dispatch), [dispatch]);

    return (
    <>
        <UserValidationForm />
    </>
    );
}