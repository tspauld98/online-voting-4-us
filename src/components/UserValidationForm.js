import { useState } from 'react';

export const UserValidationForm = ({onValidateUserInfo, ballotId}) => {

    const [voterId, setVoterId] = useState(-1);

    const change = (e) => {
        setVoterId(e.target.value);
    }

    const validateUserInfo = () => {
        onValidateUserInfo(voterId, ballotId);
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
                value={voterId}
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