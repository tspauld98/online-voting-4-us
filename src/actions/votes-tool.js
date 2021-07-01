export const VALIDATE_USER_INFO_ACTION = "VALIDATE_USER_INFO";

export const createValidateUserInfoAction = (voterId) => {
    return dispatch => {
        dispatch(createValidateUserInfoRequestAction(voterId));
        return fetch('http://localhost:3060/voters/' + encodeURIComponent(voterId))
        .then((res) => {
            if (res.status === 404) {
                console.log("error");
            } else {
                console.log("success");
            }
        })
       // (error) => {console.log("do not have this voter")})
    }
}

export const createValidateUserInfoRequestAction = (voterId) => ({
    type: VALIDATE_USER_INFO_ACTION,
    voterId
});