export const VALIDATE_USER_INFO_REQUEST_ACTION = "VALIDATE_USER_INFO_REQUEST";
export const VALIDATE_USER_INFO_DONE_ACTION = "VALIDATE_USER_INFO_DONE";

export const createValidateUserInfoAction = (voterId) => {
    return dispatch => {
        dispatch(createValidateUserInfoRequestAction());
        return fetch('http://localhost:3060/voters/' + encodeURIComponent(voterId))
        .then((res) => {
            if (res.status === 404) {
                dispatch()
            } else {
                console.log("success");
                dispatch(createValidateUserInfoDoneAction(voterId))
            }
        })
       // (error) => {console.log("do not have this voter")})
    }
}

export const createValidateUserInfoRequestAction = () => ({
    type: VALIDATE_USER_INFO_REQUEST_ACTION
});

export const createValidateUserInfoDoneAction = (voterId) => ({
    type: VALIDATE_USER_INFO_DONE_ACTION,
    voterId
});