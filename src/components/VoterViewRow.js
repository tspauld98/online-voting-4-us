export const VoterViewRow = ({ voter, onEditClick, onRemoveClick }) => {

  const editVoter = () => onEditClick(voter.id);
  const removeVoter = () => onRemoveClick(voter);

  return (
    <>
      <tr>
        <td>{voter.id}</td>
        <td>{voter.firstName}</td>
        <td>{voter.lastName}</td>
        <td>{voter.address}</td>
        <td>{voter.city}</td>
        <td>{voter.birthdate}</td>
        <td>{voter.email}</td>
        <td>{voter.phone}</td>
        <td><button type="button" value={voter.id} onClick={editVoter}>Edit</button><button type="button" value={voter.id} onClick={removeVoter}>Remove</button></td>
      </tr>
    </>
  );
};