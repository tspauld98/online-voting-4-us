import { VoterEditRow } from "./VoterEditRow";
import { VoterViewRow } from "./VoterViewRow";

export const VoterRoll = ({
  voterEdit,
  voterSort,
  voters,
  onEditClick: editVoter,
  onCancelClick: cancelVoterEdit,
  onSortClick: setVoterSort,
  onUpdateClick: updateVoter,
  onRemoveClick: removeVoter,
  onReturnClick: viewRegisterMain }) => {

  return (<>
    <h1>Voter Registration Tool</h1>
    <h2>Voter Roll</h2>
    <div>
      <table className="pure-table pure-table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Street Address</th>
            <th>City</th>
            <th>Birth Date</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Operatons</th>
          </tr>
        </thead>
        <tbody>{voters.map(voter => voterEdit === voter.id 
          ? <VoterEditRow key={voter.id} voter={voter} onSaveClick={updateVoter} onCancelClick={cancelVoterEdit} /> 
          : <VoterViewRow key={voter.id} voter={voter} onEditClick={editVoter} onRemoveClick={removeVoter} />)}</tbody>
      </table>
      <br/>
      <button className="pure-button pure-button-primary" onClick={viewRegisterMain}>Return To Registration Menu</button>
    </div>
  </>);
};