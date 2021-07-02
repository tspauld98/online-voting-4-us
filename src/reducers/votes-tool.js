import { VALIDATE_USER_INFO_DONE_ACTION } from "../actions/votes-tool";




export const validationReducer = (voterId=null, action) => {
    switch (action.type) {
       case VALIDATE_USER_INFO_DONE_ACTION:
           return action.voterId;
        default:
            return voterId;
    }
}