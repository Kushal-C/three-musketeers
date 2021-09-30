import { useState } from "react";


export const VerifyStatus = ({election , validateVoter}) => {

    const [form , setForm] = useState({firstName: '', lastName:'', id:''});

    const change = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "number"? parseInt(e.target.value) : e.target.value
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
                <input type="number" id="voterIDInput" name="id" value={form.id} onChange={change}></input>
                <button type="submit" onClick={() => validateVoter(form)}></button>
            </form>
        </div>
    )
}