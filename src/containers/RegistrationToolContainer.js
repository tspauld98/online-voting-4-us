import { useVoterRoll } from "../hooks/useVoterRoll";

import { VoterRoll } from "../components/VoterRoll";

export const RegistrationToolContainer = () => {

  const { viewSwitch, registerVoter, viewVoters, viewRegisterMain } = useVoterRoll();

  switch (viewSwitch) {
    case 1:
      return (<>
        <h1>Voter Registration Tool</h1>
        <h2>Register Voter</h2>
        <div>
          <button className="pure-button pure-button-primary" onClick={viewRegisterMain}>Return To Registration Menu</button>
        </div>
      </>);
    case 2:
      return <VoterRoll onReturnClick={viewRegisterMain} />;
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
