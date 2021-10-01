export const GET_ELECTION_LIST_REQUEST = "GET_ELECTION_LIST_REQUEST";
export const GET_ELECTION_LIST_DONE = "GET_ELECTION_LIST_DONE";
export const CREATE_ELECTION_REQUEST = "CREATE_ELECTION_REQUEST";
export const CREATE_ELECTION_DONE = "CREATE_ELECTION_DONE";
export const CREATE_UPDATE_ELECTION_REQUEST = "CREATE_UPDATE_ELECTION_REQUEST";
export const CREATE_UPDATE_ELECTION_DONE = "CREATE_UPDATE_ELECTION_DONE";


export const SET_ACTIVE_ELECTION = "SET_ACTIVE_ELECTION";
export const VOTE_ON_ELECTION = "VOTE_ON_ELECTION";
export const CREATE_NEW_ELECTION = "CREATE_NEW_ELECTION";

const getElectionListRequestAction = () => ({type: GET_ELECTION_LIST_REQUEST});
const getElectionListRequestDone = (elections) => ({type: GET_ELECTION_LIST_DONE, elections});

const createElectionRequestAction = () => ({type: CREATE_ELECTION_REQUEST});
const createElectionRequestDone = (election) => ({type: CREATE_ELECTION_DONE, election});

const createUpdateElectionRequestAction = () => ({type: CREATE_UPDATE_ELECTION_REQUEST});
const createUpdateElectionDoneAction = (election) => ({type: CREATE_UPDATE_ELECTION_DONE, election});

export const updateElection = (election) => {
    return async dispatch => {
        dispatch(createUpdateElectionRequestAction());
        const updatedElection = await fetch(`http://localhost:3060/elections/${encodeURIComponent(election.id)}`, {
            method: "PUT",
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(election)
        }).then(res => res.json());
        dispatch(createUpdateElectionDoneAction(updatedElection));
        dispatch(getElections());
    };
}

export const getElections = () => {
    return async dispatch => {
        dispatch(getElectionListRequestAction());
        const elections = await fetch('http://localhost:3060/elections').then(res => res.json());
        dispatch(getElectionListRequestDone(elections));
    }
}

export const createElection = election => {
    return async dispatch => {
        dispatch(createElectionRequestAction());
        const createdElection = await fetch('http://localhost:3060/elections', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(election)
        }).then(res => res.json());
        dispatch(createElectionRequestDone(createdElection));
        dispatch(getElections());
    };
}


export const createSetActiveElectionAction = (election) => {
    return ({type: SET_ACTIVE_ELECTION, election});
}


