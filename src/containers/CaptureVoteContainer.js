import { useMemo, useEffect } from "react";
import { useParams } from "react-router";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { UserValidationForm } from "../components/UserValidationForm";
import { createValidateUserInfoAction } from "../actions/votes-tool.js";
import { loadElection } from "../actions/election-tool";
import { Ballot } from "../components/Ballot";

export const CaptureVoteContainer = () => {
  const { ballotId } = useParams();
  const selectedBallot = useSelector((state) => state.selectedBallot);
  const validation = useSelector((state) => state.validation);

  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          loadElection: loadElection,
          onValidateUserInfo: createValidateUserInfoAction,
        },
        dispatch
      ),
    [dispatch]
  );

  useEffect(() => {
    actions.loadElection(ballotId);
  }, [actions, ballotId]);

  return (
    <>
      <UserValidationForm
        validation={validation}
        onValidateUserInfo={actions.onValidateUserInfo}
        selectedBallot={selectedBallot}
      />
      {validation && <Ballot selectedBallot={selectedBallot} />}
      {!validation && <h1> this ID is invalid </h1>}
    </>
  );
};
