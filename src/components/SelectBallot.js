import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export const SelectBallot = ({ ballots }) => {
  const history = useHistory();
  const [form, change] = useForm({
    ballot: "",
  });

  const onVoteClick = () => {
    const ballotId = form.ballot === "" ? ballots[0].id : form.ballot;
    history.push(`/vote/ballot/${ballotId}`);
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
