import { useMemo, useEffect } from "react";
import { useParams } from "react-router";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { UserValidationForm } from "../components/UserValidationForm";
import { createValidateUserInfoAction, setBallotData } from "../actions/votes-tool.js";
import { loadElection } from "../actions/election-tool";
import { Ballot } from "../components/Ballot";

export const CaptureVoteContainer = () => {
  const { ballotId } = useParams();
  const selectedBallot = useSelector((state) => state.selectedBallot);
  const userId = useSelector((state) => state.userId);
  const errorMessage = useSelector((state) => state.errorMessage);
  
    const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          loadElection: loadElection,
          onValidateUserInfo: createValidateUserInfoAction,
          setBallotData: setBallotData
        },
        dispatch
      ),
    [dispatch]
  );

  useEffect(() => {
    actions.loadElection(ballotId);
  }, [actions, ballotId]);

  console.log('jane', errorMessage)

  return (
    <>
      <UserValidationForm
        userId={userId}
        onValidateUserInfo={actions.onValidateUserInfo}
        selectedBallot={selectedBallot}
      />
      {userId && <Ballot selectedBallot={selectedBallot} userId={userId} setBallotData={actions.setBallotData} />}
      {errorMessage && <h1>{errorMessage}</h1>}
    </>
  );
};
