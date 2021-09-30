import { useState } from "react";

import { VerifyStatus } from "./VerifyStatus";

export const ElectionBallot = ({ election }) => {
    //3 possible states, 
    // verifying -> shows enter PII Screen
    // invalid -> shows error screen with a go to main screen button
    // valid -> navigates to fill out ballot screen

    const [voterStatus, setVoterStatus] = useState("VERIFYING");
    const [voterInfo, setVoterInfo] = useState({firstName: '', lastName:'', voterID:''});
    
    return (
        <>
            <VerifyStatus electionId={election.id}/>
        </>
    )

}