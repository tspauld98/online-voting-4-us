import { VALIDATE_USER_INFO_ACTION } from "../actions/election-tool";




export const validationReducer = (voterId=-1, action) => {
    switch (action.type) {
       case VALIDATE_USER_INFO_ACTION:
           return action.voterId;
        default:
            return voterId;
    }
}