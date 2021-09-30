import { useState } from "react";

import { VerifyStatus } from "./VerifyStatus";
import { ErrorPage } from "./ErrorPage";

export const ElectionBallot = ({ election , voters}) => {
    //3 possible states, 
    // verifying -> shows enter PII Screen
    // invalid -> shows error screen with a go to main screen button
    // valid -> navigates to fill out ballot screen

    const [voterStatus, setVoterStatus] = useState("VERIFYING");


    const validateVoter = (voterInfo) => {
        let exists = voters.filter(v => v.firstName === voterInfo.firstName && v.lastName === voterInfo.lastName && v.id === voterInfo.id);
        if(exists.length > 0 && !election.listOfVoterIds.includes(voterInfo.id)){
            setVoterStatus("VALID");
        }
        else {
            setVoterStatus("INVALID");
        }
    }

    return (
        <>
            {
                voterStatus === "VERIFYING" ?
                <VerifyStatus electionId={election.id} validateVoter={validateVoter}/>
                : voterStatus === "INVALID" ?
                <ErrorPage/>
                : <div>You can vote on this election!</div>
            }
        </>
    )

}