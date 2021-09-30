import { useState } from "react";


export const VerifyStatus = ({election}) => {

    const [form , setForm] = useState({firstName: '', lastName:'', voterID:''});

    const change = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <h2>Please enter your personal information to be eligible to vote for this election</h2>
            <form>
                <label htmlFor="firstNameInput">First Name</label>
                <input type="text" id="firstNameInput" name="firstName" value={form.firstName} onChange={change}></input>
                <label htmlFor="lastNameInput">Last Name</label>
                <input type="text" id="lastNameInput" name="lastName" value={form.lastName} onChange={change}></input>
                <label htmlFor="voterIDInput">Voter ID</label>
                <input type="text" id="voterIDInput" name="voterID" value={form.voterID} onChange={change}></input>
                <button type="submit" onClick={() => console.log("clicked")}></button>
            </form>
        </div>
    )
}