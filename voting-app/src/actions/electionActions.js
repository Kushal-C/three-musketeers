export const SET_ACTIVE_ELECTION = "SET_ACTIVE_ELECTION";
export const VOTE_ON_ELECTION = "VOTE_ON_ELECTION";
export const CREATE_NEW_ELECTION = "CREATE_NEW_ELECTION";

export const createSetActiveElectionAction = (election) => {
    return ({type: SET_ACTIVE_ELECTION, election});
}

export const createVoteOnElectionAction = (vote) => {
    return ({type: VOTE_ON_ELECTION, vote});
}

export const createNewElectionAction = (election) => {
    return ({
        type: CREATE_NEW_ELECTION, election
    })
}

