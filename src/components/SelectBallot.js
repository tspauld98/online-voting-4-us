import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export const SelectBallot = ({ ballots }) => {
  const history = useHistory();
  const [form, change] = useForm({
    ballot: "-1",
  });

  const onVoteClick = () => {
    if (form.ballot === "-1") return;
    history.push(`/vote/ballot/${form.ballot}`);
  };

  return (
    <>
      {ballots && ballots.length > 0 && (
        <form className="pure-form pure-form-aligned">
          <p className="splash-subhead">Select your ballot to start voting!</p>
          <label>
            <span className="splash-subhead">Ballots:</span>
            <select
              value={form.ballot}
              name="ballot"
              id="ballots"
              onChange={change}
            >
              <option value="-1">--Select One--</option>
              {ballots.map((ballot) => {
                return (
                  <option key={ballot.id} value={ballot.id}>
                    {ballot.title}
                  </option>
                );
              })}
            </select>
          </label>

          <p>
            <button
              type="button"
              className="pure-button pure-button-primary"
              onClick={onVoteClick}
            >
              Vote
            </button>
          </p>
        </form>
      )}
    </>
  );
};
