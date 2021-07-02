import { VALIDATE_USER_INFO_DONE_ACTION, VALIDATE_USER_INFO_REQUEST_ACTION, GET_CURRENT_BALLOT_DATA_ACTION } from "../actions/votes-tool";



export const validationReducer = (voterId=null, action) => {
    switch (action.type) {
       case VALIDATE_USER_INFO_DONE_ACTION:
           return action.voterId;
        case VALIDATE_USER_INFO_REQUEST_ACTION:
            return null;
        default:
            return voterId;
    }
}

export const ballotReducer = (ballot={}, action) => {
    switch (action.type) {
       case GET_CURRENT_BALLOT_DATA_ACTION:
            return action.ballot;
        default:
            return ballot;
    }
}