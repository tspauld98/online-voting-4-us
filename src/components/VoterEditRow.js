import { useForm } from '../hooks/useForm';

export const VoterEditRow = ({ voter, onSaveClick, onCancelClick: resetVoterEdit }) => {

  const [ voterForm, change ] = useForm({
    firstName: voter.firstName,
    lastName: voter.lastName,
    address: voter.address,
    city: voter.city,
    birthdate: voter.birthdate,
    email: voter.email,
    phone: voter.phone,
  });

  const updateVoter = () => onSaveClick({
    id: voter.id,
    ...voterForm,
  });

  return (
    <>
      <tr>
        <td>{voter.id}</td>
        <td><input type="text" value={voterForm.firstName} onChange={change} name="firstName" /></td>
        <td><input type="text" value={voterForm.lastName} onChange={change} name="lastName" /></td>
        <td><input type="text" value={voterForm.address} onChange={change} name="address" /></td>
        <td><input type="text" value={voterForm.city} onChange={change} name="city" /></td>
        <td><input type="text" value={voterForm.birthdate} onChange={change} name="birthdate" /></td>
        <td><input type="text" value={voterForm.email} onChange={change} name="email" /></td>
        <td><input type="text" value={voterForm.phone} onChange={change} name="phone" /></td>
        <td><button type="button" onClick={updateVoter}>Save</button><button type="button" onClick={resetVoterEdit}>Cancel</button></td>
      </tr>
    </>
  );
};