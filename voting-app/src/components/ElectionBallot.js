import { useState } from "react";
import { useLocation } from 'react-router-dom';

import { VerifyStatus } from "./VerifyStatus";

export const ElectionBallot = () => {
    //3 possible states, 
    // verifying -> shows enter PII Screen
    // invalid -> shows error screen with a go to main screen button
    // valid -> navigates to fill out ballot screen

    const [voterStatus, setVoterStatus] = useState("VERIFYING");

    return (
        <>
            {voterStatus === "VERIFYING" ? 
                <VerifyStatus/> 
            : voterStatus === "INVALID" ? 
                <VerifyStatus/> 
            : 
                <VerifyStatus/>}
        </>
    )

}