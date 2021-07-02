import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { loadElection } from "../actions/election-tool";
import { ElectionResults } from "../components/ElectionResults";
import { CommonHeader } from "../components/CommonHeader";
import { SubMenu } from "../components/SubMenu";

export const ElectionResultsContainer = () => {
  const menuLinks = [
    {
      href: "/manageElections",
      label: "Back to Elections List",
    },
    {
      href: "/createElection",
      label: "Create an Election",
    },
  ];

  const { electionId } = useParams();
  const electionResults = useSelector((state) => state.electionResults);
  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          loadElection: loadElection,
        },
        dispatch
      ),
    [dispatch]
  );

  useEffect(() => {
    actions.loadElection(electionId);
  }, [actions, electionId]);

  console.log(">> Current election: ", electionResults);
  return (
    <>
      <CommonHeader title={"Results: " + electionResults.title} />
      <SubMenu menuLinks={menuLinks} />
      <ElectionResults election={electionResults} />
    </>
  );
};
