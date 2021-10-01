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
                <label className="form-check-label" htmlFor="firstNameInput">First Name</label>
                <input className="form-control" type="text" id="firstNameInput" name="firstName" value={form.firstName} onChange={change}></input>
                <label className="form-check-label" htmlFor="lastNameInput">Last Name</label>
                <input className="form-control"  type="text" id="lastNameInput" name="lastName" value={form.lastName} onChange={change}></input>
                <label className="form-check-label" htmlFor="voterIDInput">Voter ID</label>
                <input className="form-control" type="number" id="voterIDInput" name="id" value={form.id} onChange={change}></input>
                <button className="btn btn-secondary" type="submit" onClick={() => validateVoter(form)}>Verify Voter Status</button>
            </form>
        </div>
    )
}