import { useMemo, useEffect } from "react";
import { useParams } from "react-router";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { UserValidationForm } from "../components/UserValidationForm";
import {
  createSetElectionAlreadyVotedAction,
  createValidateUserInfoAction,
  setBallotData,
} from "../actions/votes-tool.js";
import { loadElection } from "../actions/election-tool";
import { Ballot } from "../components/Ballot";

export const CaptureVoteContainer = () => {
  const { ballotId } = useParams();
  const selectedBallot = useSelector((state) => state.activeElection);
  const userId = useSelector((state) => state.userId);
  const errorMessage = useSelector((state) => state.errorMessage);
  const alreadyVotedFlag = useSelector((state) => state.alreadyVotedFlag);
  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          loadElection: loadElection,
          onValidateUserInfo: createValidateUserInfoAction,
          setAlreadyVotedFlag: createSetElectionAlreadyVotedAction,
          setBallotData: setBallotData,
        },
        dispatch
      ),
    [dispatch]
  );

  useEffect(() => {
    actions.loadElection(ballotId);
  }, [actions, ballotId]);

  if (userId) {
    const hasUserAlreadyVoted = selectedBallot?.voterIds?.includes(
      Number(userId)
    );
    actions.setAlreadyVotedFlag(hasUserAlreadyVoted);
  }

  return (
    <>
      <UserValidationForm
        userId={userId}
        onValidateUserInfo={actions.onValidateUserInfo}
      />
      {userId && !alreadyVotedFlag && (
        <Ballot
          selectedBallot={selectedBallot}
          userId={userId}
          setBallotData={actions.setBallotData}
        />
      )}
      {errorMessage && <h1>{errorMessage}</h1>}
      {userId && alreadyVotedFlag && (
        <h1> You have already cast your vote in this election</h1>
      )}
    </>
  );
};
