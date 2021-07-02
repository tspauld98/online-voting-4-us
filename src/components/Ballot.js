import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CommonHeader } from "./CommonHeader";

export const Ballot = ({ selectedBallot: ballot, userId, setBallotData }) => {
  let history = useHistory();
  const { propositions, title } = ballot;
  const [newBallot, setNewBallot] = useState({ ...ballot });

  const change = (description, e) => {
    const newB = { ...ballot };
    const desc = newB.propositions.find((p) => p.description === description);
    e.target.checked ? desc.votesFor++ : desc.votesFor--;

    const userIdNumeric = Number(userId);
    if (!newB.voterIds.includes(userIdNumeric)) {
      newB.voterIds.push(userIdNumeric);
    }
    setNewBallot({ ...newB });
  };

  const submit = () => {
    setBallotData(newBallot).then(() => {
      history.push("/success");
    });
  };

  return (
    <>
      <h1>Ballot</h1>
      <CommonHeader title={title} />
      <form id="ballot-form" className="pure-form pure-form-aligned">
        <fieldset>
          {propositions &&
            propositions.map((p, index) => {
              return (
                <div key={index} className="pure-control-group">
                  <input
                    type="checkbox"
                    id={p.description}
                    name={p.description}
                    value={p.description}
                    onChange={(e) => {
                      change(p.description, e);
                    }}
                  />
                  <label htmlFor={p.description}>{p.description}</label>
                  <br></br>
                </div>
              );
            })}
        </fieldset>
        <div className="pure-controls">
          <button
            type="button"
            onClick={submit}
            className="button-secondary button-blue"
          >
            Cast Vote
          </button>
        </div>
      </form>
    </>
  );
};
