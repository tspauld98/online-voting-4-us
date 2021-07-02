export const VALIDATE_USER_INFO_REQUEST_ACTION = "VALIDATE_USER_INFO_REQUEST";
export const VALIDATE_USER_INFO_DONE_ACTION = "VALIDATE_USER_INFO_DONE";
export const RESET_USER_INFO_DONE_ACTION = "RESET_USER_INFO_DONE";

export const createValidateUserInfoAction = (voterId) => {
    return dispatch => {
        dispatch(createValidateUserInfoRequestAction());
        return fetch('http://localhost:3060/voters/' + encodeURIComponent(voterId))
        .then((res) => {
            if (res.status === 404) {

            } else {
                console.log("success");
                dispatch(createValidateUserInfoDoneAction(voterId))
            }
        })

    }
}

export const createValidateUserInfoRequestAction = () => ({
    type: VALIDATE_USER_INFO_REQUEST_ACTION
});

export const createValidateUserInfoDoneAction = (voterId) => ({
    type: VALIDATE_USER_INFO_DONE_ACTION,
    voterId
});
