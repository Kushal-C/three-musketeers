import { ElectionListContainer } from "../containers/ElectionListContainer";
import { Link } from "react-router-dom";
export const CaptureVotes = () => {


    // Broken down into a couple individual screens
    // Ballot selection (?)
    // Capture and Validate identify information
    // Store voting record
    // Display Ballot along with cast vote

    /// a ballot is a combination is a voter, election and the answer to the election 
    return(
        <>
            <h1>Vote Here!</h1>
            <ElectionListContainer/>
            <Link to='/voter-creation'>Register to Vote Here!</Link>
        </>
    );
}