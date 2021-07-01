export const VALIDATE_USER_INFO_ACTION = "VALIDATE_USER_INFO";

export const createValidateUserInfoAction = (voterId) => ({
    type: VALIDATE_USER_INFO_ACTION,
    voterId
});