import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Ballot = ({selectedBallot: ballot, userId, setBallotData}) => {
    let history = useHistory();
    const { propositions, title } = ballot;
    // const {propositions, title} = useSelector(state => state.ballot);
    const [newBallot, setNewBallot] = useState({...ballot})
    // const dispatch = useDispatch();
  
    // const actions = useMemo(() => bindActionCreators({
    //   onValidateUserInfo : validateUserInfoAction
    // }, dispatch), [dispatch]);

    const change = (description, e) => {
        console.log(e.target.checked);
        const newB = {...ballot}
        const desc = newB.propositions.find(p => p.description === description)
        e.target.checked ? desc.votesFor++ : desc.votesFor--;
        newB.voterIds.push(Number(userId))
        setNewBallot({...newB})
    }

    const submit = () => {
        setBallotData(newBallot)
        .then(() => {
            history.push("/success");
        })
    }

    return (
    <>
        <h1>Ballot</h1>
        <h2>{title}</h2>
        {propositions && propositions.map((p, index) => {
            return (
                <div key={index}>
                    <input type="checkbox" id={p.description} name={p.description} value={p.description} onChange={(e) => {change(p.description, e)}}/>
                    <label htmlFor={p.description}>{p.description}</label><br></br>
                </div>
            )
        })}
        <button type="button" onClick={submit}>Cast Vote</button>
    </>
    );
}