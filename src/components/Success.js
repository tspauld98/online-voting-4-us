import { useHistory } from "react-router-dom";

export const Success = () => {
    let history = useHistory();

    const submit = () => {
        history.push("/home")
    }

    return (
        <>
        <h1>Your vote has been successfully recorded!</h1>
        <button type="button" onClick={submit}>Return to the homepage</button>
        </>
    );
};
