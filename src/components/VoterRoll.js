export const VoterRoll = ({ onReturnClick: viewRegisterMain }) => {
  return (<>
    <h1>Voter Registration Tool</h1>
    <h2>Voter Roll</h2>
    <div>
      <button className="pure-button pure-button-primary" onClick={viewRegisterMain}>Return To Registration Menu</button>
    </div>
  </>);
};