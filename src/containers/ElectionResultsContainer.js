import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { loadElection } from "../actions/election-tool";
import { ElectionResults } from "../components/ElectionResults";

export const ElectionResultsContainer = () => {
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
  return <ElectionResults election={electionResults} />;
};
