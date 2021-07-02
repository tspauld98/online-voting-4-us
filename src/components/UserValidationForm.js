import { useState } from "react";
import { CommonHeader } from "./CommonHeader";

export const UserValidationForm = ({ onValidateUserInfo }) => {
  const [voterId, setVoterId] = useState('');

  const change = (e) => {
    setVoterId(e.target.value);
  };

  const validateUserInfo = () => {
    onValidateUserInfo(voterId);
  };

  return (
    <>
      <h1>Capture Votes</h1>
      <CommonHeader title="User Info" />
      <form id="validation-form" className="pure-form pure-form-aligned">
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="voterId">Voter ID</label>
            <input
              type="text"
              id="voterId"
              name="voterId"
              value={voterId}
              onChange={change}
            />
          </div>
        </fieldset>
        <div className="pure-controls">
          <button
            type="button"
            onClick={validateUserInfo}
            className="button-secondary button-blue"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
