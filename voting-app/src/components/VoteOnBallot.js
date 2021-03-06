import { useState } from "react";
import { Link } from "react-router-dom";

export const VoteOnBallet = ({election, voterId, onVoteOnElection: onVote}) => {
    const [questionAnswers, setQuestionAnswers] = useState([]);
    const [voted, setVoted] = useState(false);

    //{electionId, voterId, votes } 
    const answerQuestion = (value, index) => {
        let questionAnswersCopy = [...questionAnswers];
        questionAnswersCopy[index] = value;
        setQuestionAnswers(questionAnswersCopy);
    }

    const submitVote = () => {
        let electionCopy = {...election};
        electionCopy.listOfVoterIds.push(voterId);
        electionCopy.questions.forEach((question, index) => {
            if(questionAnswers[index] === 'a'){
                question.votesForA++;
            }
            else {
                question.votesForB++;
            }
        });
        onVote(electionCopy);
        setVoted(true);
    };


    return (
        <>
        { !voted ?
        <div>
            <h2>{election.name}</h2>
            <ul>
                {election.questions.map((q, i) => {
                    return (
                    <li key={i}>
                        <h3 className="questionText">{q.questionText}</h3>
                        <form>
                            <label className="form-check-label">
                            <input type="radio" name={q.questionText} onChange={() => answerQuestion("a", i)}/>{q.optionAText}</label>
                            <label className="form-check-label">
                            <input type="radio" name={q.questionText} onChange={() => answerQuestion("b", i)}/>{q.optionBText}</label>
                        </form>
                    </li>
                    );
                })}
            </ul>
            <button type="submit" className="btn btn-primary"onClick={() => submitVote()}>Cast Vote</button>
        </div>
        :
        <div>
            <h2 className="successText">Thanks for voting in {election.name}!</h2>
            <Link className="btn btn-primary" to="/capture-votes">Click here to go back to the main voting page</Link>
        </div>
        }
        </>
    )
}