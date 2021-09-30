import { ElectionListContainer } from "../containers/ElectionListContainer";
import { Link } from "react-router-dom";
export const CaptureVotes = () => {


    // Broken down into a couple individual screens
    // Ballot selection (?)
    // Capture and Validate identify information
    // Store voting record
    // Display Ballot along with cast vote

    /// a ballot is a combination is a voter, election and the answer to the election 
    let elections = [
        { 
            id: 1, 
            name: "Cats vs Dogs 2021",
            listOfVoterIds: [], 
            questions: [
                {
                    votesForA: 0,
                    votesForB: 0,
                    questionText: "Cats vs Dogs?",
                    optionAText: "Cats",
                    optionBText: "Dogs",
                },
            ]
        },
        { 
            id: 2, 
            name: "Food Battle 2021",
            listOfVoterIds: [1,3,4], 
            questions: [
                {
                    votesForA: 0,
                    votesForB: 0,
                    questionText: "Pizza vs Ice Cream",
                    optionAText: "Pizza",
                    optionBText: "Ice Cream",
                },
                {
                    votesForA: 0,
                    votesForB: 0,
                    questionText: "Is a hotdog a sandwich?",
                    optionAText: "Yes",
                    optionBText: "No",
                },
            ]
        },
    ];



    return(
        <>
            <h1>Vote Here!</h1>
            <ElectionListContainer/>
            <Link to='/voter-creation'>Register to Vote Here!</Link>
        </>
    );
}