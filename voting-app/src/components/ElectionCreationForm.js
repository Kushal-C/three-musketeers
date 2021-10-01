import { useState } from "react";

export const ElectionCreationForm = ({buttonText, onAdd: onSubmitElection}) => {

    const [
        electionForm,
        setElectionForm,
    ] = useState({
        name: '',
        listOfVoterIds: [],
        questions: [],
    });

    const [questionForm, setQuestionForm] = useState({questionText: '',
    optionAText: '',
    optionBText: '', 
    votesForA: 0,
    votesForB: 0,});
 
    const change = e => {
        setElectionForm({
            ...electionForm,
            [e.target.name]: e.target.value,
        });
    };

    const questionChange = e => {
        setQuestionForm({
            ...questionForm,
            [e.target.name]: e.target.value,
        });
    }

    const submitElection = () => {
        onSubmitElection({ ...electionForm });
        setElectionForm({
            name: '',
            listOfVoterIds: [],
            questions: [],
        });
    }

    const submitQuestion = () => {
        let questionsCopy = [...electionForm.questions];
        questionsCopy.push(questionForm);
        setElectionForm( {...electionForm, questions: questionsCopy});
        setQuestionForm({questionText: '',
        optionAText: '',
        optionBText: '', 
        votesForA: 0,
        votesForB: 0,});
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
                {
                    electionForm.questions.map((q) => {
                        return <div> {q.questionText}</div>
                    })
                }
                <label htmlFor="question-input">Question</label>
                <input
                    type="text"
                    id="question-input"
                    value={questionForm.questionText}
                    onChange={questionChange}
                    name="questionText"
                ></input>
                <label htmlFor="option-A-input">Option A</label>
                <input
                    type="text"
                    id="option-A-input"
                    value={questionForm.optionAText}
                    onChange={questionChange}
                    name="optionAText"
                ></input>
                <label htmlFor="option-B-input">Option B</label>
                <input
                    type="text"
                    id="option-B-input"
                    value={questionForm.optionBText}
                    onChange={questionChange}
                    name="optionBText"
                ></input>
                <button type="button" onClick={submitQuestion}>
                    Submit Question
                </button>
                <button type="button" onClick={submitElection}>
                    {buttonText}
                </button>
            </div>
        </form>
        </header>
    )
}