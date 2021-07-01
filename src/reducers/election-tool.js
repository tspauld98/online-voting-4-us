import {
    APPEND_ELECTION_ACTION
} from '../actions/election-tool';

export const electionsReducer = (elections = [], action) => {
    switch (action.type) {
        case APPEND_ELECTION_ACTION:
            return [
                ...elections,
                {
                    ...action.election,
                    id: Math.max(...elections.map(e => e.id), 0) + 1
                }
            ]
            default:
               return elections;
    }
}