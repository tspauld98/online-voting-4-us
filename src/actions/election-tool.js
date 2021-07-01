export const APPEND_ELECTION_ACTION = "APPEND_ELECTION";

export const createAppendElectionAction = (election) => ({
    type: APPEND_ELECTION_ACTION,
    election
});