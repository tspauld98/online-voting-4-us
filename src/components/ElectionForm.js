import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom";

export const ElectionForm = ({
  propositions,
  onSubmitForm,
  onAppendProposition,
}) => {
  const [form, change] = useForm({
    title: "",
    proposition: "",
  });

  const history = useHistory();

  const submitForm = () => {
    const election = {
      title: form.title,
      propositionQuestions: [...propositions],
    };
    onSubmitForm(election).then(() => history.push("/manageElections"));
  };

  const onAppendPropositionClick = () => {
    onAppendProposition(form.proposition);
    const e = {
      target: {
        name: "proposition",
        value: "",
      },
    };
    change(e);
  };

  return (
    <form className="pure-form pure-form-aligned">
      <fieldset>
        <div className="pure-control-group">
          <label htmlFor="title-input">Title</label>
          <input
            type="text"
            id="title-input"
            value={form.title}
            onChange={change}
            name="title"
          />
        </div>
        <ul>
          {propositions.map((prop, index) => {
            return <li key={index}>{prop}</li>;
          })}
        </ul>
        <div className="pure-control-group">
          <label htmlFor="proposition-input">Proposition details</label>
          <input
            type="text"
            id="proposition-input"
            value={form.proposition}
            onChange={change}
            name="proposition"
          />
          <button
            type="button"
            onClick={onAppendPropositionClick}
            className="button-green button-xsmall"
          >
            Add
          </button>
        </div>
        <div className="pure-controls">
          <button
            type="button"
            onClick={submitForm}
            className="button-primary pure-button button-blue"
          >
            Create election
          </button>
        </div>
      </fieldset>
    </form>
  );
};
