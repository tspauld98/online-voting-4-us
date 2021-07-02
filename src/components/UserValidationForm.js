import { useState } from 'react';

export const UserValidationForm = ({validation, onValidateUserInfo, ballotId}) => {

    const [userId, setUserId] = useState(-1);

    const change = (e) => {
        setUserId(e.target.value);
    }

    const validateUserInfo = () => {
        onValidateUserInfo(userId, ballotId);
    }

    return (
    <>
        <h1>Capture Votes</h1>
        <h2>User Info</h2>
        <form>
            <div>
                <label htmlFor="voterId">Voter ID</label>
                <input
                type="text"
                id="voterId"
                name="voterId"
                value={userId}
                onChange={change}
                />
            </div>
            <button type="button" onClick={validateUserInfo}>
                Submit
            </button>
        </form>
    </>
    );
}