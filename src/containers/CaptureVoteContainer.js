import { useMemo, useEffect } from "react";
import { useParams } from "react-router";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { UserValidationForm } from "../components/UserValidationForm";
import {
  createClearElectionAlreadyVotedAction,
  createSetElectionAlreadyVotedAction,
  createValidateUserInfoAction,
} from "../actions/votes-tool.js";
import { loadElection } from "../actions/election-tool";
import { Ballot } from "../components/Ballot";

export const CaptureVoteContainer = () => {
  const { ballotId } = useParams();
  const selectedBallot = useSelector((state) => state.selectedBallot);
  const userId = useSelector((state) => state.userId);
  const alreadyVotedFlag = useSelector((state) => state.alreadyVotedFlag);

  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          loadElection: loadElection,
          onValidateUserInfo: createValidateUserInfoAction,
          setAlreadyVotedFlag: createSetElectionAlreadyVotedAction,
          clearAlreadyVotedFlag: createClearElectionAlreadyVotedAction,
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
        <Ballot selectedBallot={selectedBallot} userId={userId} />
      )}
      {!userId && <h1> this ID is invalid </h1>}
      {userId && alreadyVotedFlag && (
        <h1> You have already cast your vote in this election</h1>
      )}
    </>
  );
};
