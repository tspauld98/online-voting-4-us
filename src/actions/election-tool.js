export const APPEND_ELECTION_ACTION = "APPEND_ELECTION";
export const VALIDATE_USER_INFO_ACTION = "VALIDATE_USER_INFO";

export const createAppendElectionAction = (election) => ({
    type: APPEND_ELECTION_ACTION,
    election
});

export const createValidateUserInfoAction = (voter) => ({
    type: VALIDATE_USER_INFO_ACTION,
    voter
});
