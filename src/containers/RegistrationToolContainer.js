import { useVoterRoll } from "../hooks/useVoterRoll";

import { RegistrationForm } from "../components/RegistrationForm";
import { VoterRoll } from "../components/VoterRoll";

export const RegistrationToolContainer = () => {

  const { voters, viewSwitch, voterEdit, voterSort, registerVoter, viewVoters, viewRegisterMain, editVoter, cancelEditVoter, addVoter, updateVoter, removeVoter } = useVoterRoll();

  switch (viewSwitch) {
    case 1:
      return <RegistrationForm onCompleteClick={addVoter} onReturnClick={viewRegisterMain} />;
    case 2:
      return <VoterRoll voterEdit={voterEdit} voters={voters} onEditClick={editVoter} onCancelClick={cancelEditVoter} onUpdateClick={updateVoter} onRemoveClick={removeVoter} onReturnClick={viewRegisterMain} />;
    default:
      return (<>
          <h1>Voter Registration Tool</h1>
          <div>
            <button className="pure-button pure-button-primary" onClick={registerVoter}>Register Voter</button>
          </div>
          <br/>
          <div>
            <button className="pure-button pure-button-primary" onClick={viewVoters}>View Registered Voters</button>
          </div>
      </>);
  };
}
