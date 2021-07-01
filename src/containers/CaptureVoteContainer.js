import { useMemo, useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';


export const CaptureVoteContainer = () => {

    const voters = useSelector(state => state.voters);
  
    const dispatch = useDispatch();
  
    const actions = useMemo(() => bindActionCreators({
      onValidateUserInfo : validateUserInfoAction
    }, dispatch), [dispatch]);

    

    return (
    <>
        <h1>Capture Votes</h1>
        <h2>User Info</h2>
        <div>
            <label>
                first name
            </label>
            <input type="text" value = "">
            </input>
        </div>
        <div>
            <label>
                last name
            </label>
            <input type="text" value = "">
            </input>
        </div>

        <button type="button" onClick={validateUserInfo}>
            Submit
       </button>

    </>
    );
}