import { REGISTER_VOTER_ACTION, REFRESH_VOTERS_DONE_ACTION, VIEW_VOTERS_ACTION } from "../actions/registration-tool";

export const registrationsReducer = (voters = [], action) => {
  switch (action.type) {
    case REFRESH_VOTERS_DONE_ACTION:
      return action.value;
    default:
      return voters;
  }
}

export const viewSwitchReducer = (_, action) => {
  console.log(action);

  switch (action.type) {
    case REGISTER_VOTER_ACTION:
      console.log("register voter");
      return 1;
    case VIEW_VOTERS_ACTION:
      console.log("view voters");
      return 2;
    default:
      return 0;
  }
}
