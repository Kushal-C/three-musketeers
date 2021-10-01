export const GET_VOTER_LIST_REQUEST = "GET_VOTER_LIST_REQUEST";
export const GET_VOTER_LIST_DONE = "GET_VOTER_LIST_DONE";
export const ADD_VOTER_REQUEST= "ADD_VOTER_REQUEST";
export const ADD_VOTER_DONE = "ADD_VOTER_DONE";
export const DELETE_VOTER_REQUEST= "DELETE_VOTER_REQUEST";
export const DELETE_VOTER_DONE = "DELETE_VOTER_DONE";
export const EDIT_VOTER_REQUEST= "EDIT_VOTER_REQUEST";
export const EDIT_VOTER_DONE = "EDIT_VOTER_DONE";

export const EDIT_VOTER = "EDIT_VOTER";
export const CANCEL_VOTER = "CANCEL_VOTER";
export const SORT_VOTERS = 'SORT_VOTERS';

export const createGetVotersListRequestAction = () => {
    return ({type: GET_VOTER_LIST_REQUEST});
}

export const createGetVotersListDoneAction = (voters) => {
    return ({type: GET_VOTER_LIST_DONE, voters});
}

export const createAddVoterRequestAction = () => {
    return ({type:ADD_VOTER_REQUEST, });
};

export const createAddVoterDoneAction = (newVoter) => {
    return({type: ADD_VOTER_DONE, newVoter});
};

export const createDeleteVoterRequestAction = () => {
    return ({type:DELETE_VOTER_REQUEST, });
};

export const createDeleteVoterDoneAction = (voterId) => {
    return({type: DELETE_VOTER_DONE,voterId});
};
export const createEditVoterRequestAction = () => {
    return ({type:EDIT_VOTER_REQUEST, });
};

export const createEditVoterDoneAction = (newVoter) => {
    return({type: EDIT_VOTER_DONE,newVoter});
};

export const replaceVoter = (newVoter) => {
    return async dispatch =>{
        dispatch(createEditVoterRequestAction());
        const voter = await fetch(`http://localhost:3060/voters/${encodeURIComponent(newVoter.id)}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVoter)
        }).then(res => res.json());
        dispatch(createEditVoterDoneAction(voter));
        dispatch(createCancelVoterAction());
        dispatch(refreshVoters());
    }
} 

export const deleteVoter = (voterId) => {
    return async dispatch => {
        dispatch(createDeleteVoterRequestAction());
        await fetch(`http://localhost:3060/voters/${encodeURIComponent(voterId)}`, {
            method: 'DELETE'
        }).then(res => res.json());
        dispatch(createDeleteVoterDoneAction(voterId));
        dispatch(refreshVoters());
    };
};

export const addVoter = (newVoter) => {
    return async dispatch => {
        dispatch(createAddVoterRequestAction());
        const appendedVoter = await fetch('http://localhost:3060/voters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVoter)
        }).then(res => res.json());
        dispatch(createAddVoterDoneAction(appendedVoter));
        dispatch(refreshVoters());
    };

}
export const refreshVoters = () => {

    return dispatch => {
        dispatch(createGetVotersListRequestAction());
        return  fetch('http://localhost:3060/voters')
                    .then(res => res.json())
                    .then(voters => dispatch(createGetVotersListDoneAction(voters)));
    };
}

export const createEditVoterAction = voterId => ({type: EDIT_VOTER, voterId});

export const createCancelVoterAction = () => ({ type: CANCEL_VOTER });

export const createSortVotersAction = (col) => ({ type: SORT_VOTERS, col });