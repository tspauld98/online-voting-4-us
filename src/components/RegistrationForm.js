import { useForm } from "../hooks/useForm";

export const RegistrationForm = ({ onCompleteClick: addVoter, onReturnClick: viewRegisterMain }) => {
  const [ voterForm, change, resetForm ] = useForm({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    birthdate: '',
    email: '',
    phone: '',
    removed: false,
  });

  const completeForm = () => {
    addVoter(voterForm);
    resetForm();
    viewRegisterMain();
  }

  return (<>
    <h1>Voter Registration Tool</h1>
    <h2>Register Voter</h2>
    <form className="pure-form pure-form-aligned">
      <div className="pure-control-group">
        <label htmlFor="first-name-input">First Name</label>
        <input type="text" id="first-name-input" value={voterForm.firstName} onChange={change} name="firstName" />
      </div>
      <div className="pure-control-group">
        <label htmlFor="last-name-input">Last Name</label>
        <input type="text" id="last-name-input" value={voterForm.lastName} onChange={change} name="lastName" />
      </div>
      <div className="pure-control-group">
        <label htmlFor="address-input">Street Address</label>
        <input type="text" id="address-input" value={voterForm.address} onChange={change} name="address" />
      </div>
      <div className="pure-control-group">
        <label htmlFor="city-input">City</label>
        <input type="text" id="city-input" value={voterForm.city} onChange={change} name="city" />
      </div>
      <div className="pure-control-group">
        <label htmlFor="birthdate-input">Birth Date</label>
        <input type="text" id="birthdate-input" value={voterForm.birthdate} onChange={change} name="birthdate" />
      </div>
      <div className="pure-control-group">
        <label htmlFor="email-input">Email</label>
        <input type="text" id="email-input" value={voterForm.email} onChange={change} name="email" />
      </div>
      <div className="pure-control-group">
        <label htmlFor="phone-input">Phone</label>
        <input type="text" id="phone-input" value={voterForm.phone} onChange={change} name="phone" />
      </div>
    </form>
    <div className="pure-controls">
      <button className="pure-button" type="button" onClick={completeForm}>Complete Registration</button>&nbsp;&nbsp;
      <button className="pure-button pure-button-primary" onClick={viewRegisterMain}>Return To Registration Menu</button>
    </div>
  </>);
}