import { useState } from "react";

export const VoterForm = ({ onSubmitVoter}) => {

    const [
        voterForm,
        setVoterForm,
    ] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        birthdate: '',
        email: '',
        phone: '',
    });
    
    const change = e => {
        setVoterForm({
            ...voterForm,
            [e.target.name]: e.target.value,
        });
    };

    const submitVoter = () => {
        onSubmitVoter({ ...voterForm });
        setVoterForm({
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            birthdate: '',
            email: '',
            phone: '',    
        });
    }
    
    return (
      <div className="voterForm">
        <h1>Registration form </h1>
        <form >
            <div>
                <label htmlFor="firstName-input">First Name</label>
                <input
                    className="form-control" 
                    type="text"
                    id="firstName-input"
                    value={voterForm.firstName}
                    onChange={change}
                    name="firstName"
                />
            </div>
            <div>
                <label htmlFor="lastName-input">Last Name</label>
                <input
                    className="form-control" 
                    type="text"
                    id="lastName-input"
                    value={voterForm.lastName}
                    onChange={change}
                    name="lastName"
                />
            </div>
            <div>    
                <label htmlFor="address-input">Address</label>
                <input
                    className="form-control" 
                    type="text"
                    id="address-input"
                    value={voterForm.address}
                    onChange={change}
                    name="address"
                />
            </div>
            <div>    
                <label htmlFor="city-input">City</label>
                <input
                    className="form-control" 
                    type="text"
                    id="city-input"
                    value={voterForm.city}
                    onChange={change}
                    name="city"
                />
            </div>
            <div>    
                <label htmlFor="birthdate-input">Birthdate</label>
                <input
                    className="form-control" 
                    type="text"
                    id="birthdate-input"
                    value={voterForm.birthdate}
                    onChange={change}
                    name="birthdate"
                />
            </div>
            <div>    
                <label htmlFor="email-input">Email</label>
                <input
                    className="form-control" 
                    type="text"
                    id="email-input"
                    value={voterForm.email}
                    onChange={change}
                    name="email"
                />
            </div>
            <div>    
                <label htmlFor="phone-input">Phone</label>
                <input
                    className="form-control" 
                    type="text"
                    id="phone-input"
                    value={voterForm.phone}
                    onChange={change}
                    name="phone"
                />                
            </div>

            <button type="button" onClick={submitVoter}>
                Submit
            </button>
        </form>        
      </div>
    );
  };