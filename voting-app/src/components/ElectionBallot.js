import { useState } from "react";
import { VerifyStatus } from "./VerifyStatus";
import { ErrorPage } from "./ErrorPage";
import { VoteOnBalletContainer } from "../containers/VoteOnBallotContainer";

export const ElectionBallot = ({ election , voters}) => {
    //3 possible states, 
    // verifying -> shows enter PII Screen
    // invalid -> shows error screen with a go to main screen button
    // valid -> navigates to fill out ballot screen

    const [voterStatus, setVoterStatus] = useState("VERIFYING");
    const [voterId, setVoterId] = useState(-1);

    const validateVoter = (voterInfo) => {
        let exists = voters.filter(v => v.firstName === voterInfo.firstName && v.lastName === voterInfo.lastName && v.id === voterInfo.id);
        if(exists.length > 0 && !election.listOfVoterIds.includes(voterInfo.id)){
            setVoterId(voterInfo.id);
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
                : <VoteOnBalletContainer voterId={voterId} />
            }
        </>
    )

}