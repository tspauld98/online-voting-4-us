import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { CommonHeader } from "../components/CommonHeader";
import { ElectionForm } from "../components/ElectionForm";
import {
  appendElection,
  createAppendPropositionAction,
} from "../actions/election-tool";

export const ElectionFormContainer = () => {
  const propositions = useSelector((state) => state.propositions);

  const actions = bindActionCreators(
    {
      onAppendProposition: createAppendPropositionAction,
      onAppendElection: appendElection,
    },
    useDispatch()
  );

  return (
    <>
      <CommonHeader title="Election Form" />
      <div>
        <a href="/manageElections">Back to Elections List</a>
      </div>
      <ElectionForm
        propositions={propositions}
        onSubmitForm={actions.onAppendElection}
        onAppendProposition={actions.onAppendProposition}
      />
    </>
  );
};
