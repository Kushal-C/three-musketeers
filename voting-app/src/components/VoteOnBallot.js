import { useState } from "react";
import { Link } from "react-router-dom";

export const VoteOnBallet = ({election, voterId, onVoteOnElection: onVote}) => {
    const [questionAnswers, setQuestionAnswers] = useState([]);
    const [voted, setVoted] = useState(false);

    //{electionId, voterId, votes } 
    const answerQuestion = (value, index) => {
        console.log(questionAnswers);
        let questionAnswersCopy = [...questionAnswers];
        questionAnswersCopy[index] = value;
        setQuestionAnswers(questionAnswersCopy);
    }

    const submitVote = () => {
        onVote({electionId: election.id, voterId, votes: questionAnswers});
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
                        <h3>{q.questionText}</h3>
                        <form>
                            <label>
                            <input type="radio" name={q.questionText} onChange={() => answerQuestion("a", i)}/>{q.optionAText}</label>
                            <label>
                            <input type="radio" name={q.questionText} onChange={() => answerQuestion("b", i)}/>{q.optionBText}</label>
                        </form>
                    </li>
                    );
                })}
            </ul>
            <button type="submit" onClick={() => submitVote()}>Cast Vote</button>
        </div>
        :
        <div>
            <h2>Thanks for voting in {election.name}!</h2>
            <Link to="/capture-votes">Click here to go back to the main voting page</Link>
        </div>
        }
        </>
    )
}