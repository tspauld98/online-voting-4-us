import { REFRESH_VOTERS_DONE_ACTION, REGISTER_VOTER_ACTION, VIEW_VOTERS_ACTION, RESET_VIEW_ACTION, EDIT_VOTER_ACTION } from "../actions/registration-tool";

export const registrationsReducer = (voters = [], action) => {
  switch (action.type) {
    case REFRESH_VOTERS_DONE_ACTION:
      return action.value;
    default:
      return voters;
  };
};

export const viewSwitchReducer = (viewSwitch = 0, action) => {
  switch (action.type) {
    case REGISTER_VOTER_ACTION:
      return 1;
    case VIEW_VOTERS_ACTION:
      return 2;
    case RESET_VIEW_ACTION:
      return 0;
    default:
      return viewSwitch;
  };
};

export const voterEditReducer = (_, action) => {
  if (action.type === EDIT_VOTER_ACTION) {
    return action.value;
  } else {
    return 0;
  }
};
