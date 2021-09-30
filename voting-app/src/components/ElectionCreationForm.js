import { useState } from "react";

export const ElectionCreationForm = ({buttonText, onAdd: onSubmitElection}) => {

    const [
        electionForm,
        setElectionForm,
    ] = useState({
        name: '',
        question: '',
        optionA: '',
        optionB: '',
    });
 
    const change = e => {
        setElectionForm({
            ...electionForm,
            [e.target.name]: e.target.value,
        });
    };

    const submitElection = () => {
        onSubmitElection({ ...electionForm });
        setElectionForm({
            name: '',
            question: '',
            optionA: '',
            optionB: '', 
            votesForA: 0,
            votesForB: 0,
        });
    }

    return(
        <header>
        <form>
            <div>
                <h2>Form</h2>
                <label htmlFor="name-input">Election Name</label>
                <input
                    type="text"
                    id="name-input"
                    value={electionForm.name}
                    onChange={change}
                    name="name"
                ></input>
                <label htmlFor="question-input">Question</label>
                <input
                    type="text"
                    id="question-input"
                    value={electionForm.question}
                    onChange={change}
                    name="question"
                ></input>
                <label htmlFor="option-A-input">Option A</label>
                <input
                    type="text"
                    id="option-A-input"
                    value={electionForm.optionA}
                    onChange={change}
                    name="optionA"
                ></input>
                <label htmlFor="option-B-input">Option B</label>
                <input
                    type="text"
                    id="option-B-input"
                    value={electionForm.optionB}
                    onChange={change}
                    name="optionB"
                ></input>
                <button type="button" onClick={submitElection}>
                    {buttonText}
                </button>
            </div>
        </form>
        </header>
    )
}