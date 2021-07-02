import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { CommonHeader } from "../components/CommonHeader";
import { SubMenu } from "../components/SubMenu";
import { ElectionForm } from "../components/ElectionForm";
import {
  appendElection,
  createAppendPropositionAction,
} from "../actions/election-tool";

export const ElectionFormContainer = () => {
  const menuLinks = [
    {
      href: "/manageElections",
      label: "Back to Elections List",
    },
  ];

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
      <SubMenu menuLinks={menuLinks} />
      <ElectionForm
        propositions={propositions}
        onSubmitForm={actions.onAppendElection}
        onAppendProposition={actions.onAppendProposition}
      />
    </>
  );
};
