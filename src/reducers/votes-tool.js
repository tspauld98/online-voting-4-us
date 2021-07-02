import { VALIDATE_USER_INFO_DONE_ACTION, RESET_USER_INFO_DONE_ACTION, VALIDATE_USER_INFO_REQUEST_ACTION } from "../actions/votes-tool";



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