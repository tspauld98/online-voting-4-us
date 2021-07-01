import { REFRESH_VOTERS_DONE_ACTION } from "../actions/registration-tool";

export const registrationsReducer = (voters = [], action) => {
  switch (action.type) {
    case REFRESH_VOTERS_DONE_ACTION:
      return action.value;
    default:
      return voters;
  }
}
