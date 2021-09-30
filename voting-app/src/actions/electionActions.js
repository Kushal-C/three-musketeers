export const SET_ACTIVE_ELECTION = "SET_ACTIVE_ELECTION";

export const createSetActiveElectionAction = (election) => {
    return ({type: SET_ACTIVE_ELECTION, election});
}

