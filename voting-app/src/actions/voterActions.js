
export const VERIFY_VOTER_INFORMATION = "VERIFY_VOTER_INFORMATION";
export const SET_ACTIVE_VOTER = "SET_ACTIVE_VOTER";
export const ADD_VOTER = "ADD_VOTER";
export const EDIT_VOTER = "EDIT_VOTER";
export const CANCEL_VOTER = "CANCEL_VOTER";
export const REMOVE_VOTER = "REMOVE_VOTER";
export const REPLACE_VOTER = "REPLACE_VOTER";
export const GET_VOTER_LIST = "GET_VOTER_LIST";
export const SORT_VOTERS = 'SORT_VOTERS';

export const createVerifyVoterInformationAction = voterInfo => {
    return ({ type: VERIFY_VOTER_INFORMATION, voterInfo });
}

export const createSetActiveVoterAction = voter => {
    return({type: SET_ACTIVE_VOTER, voter});
}

export const createAddVoterAction = newVoter => {
    return({type: ADD_VOTER, voter: newVoter});
}

export const createEditVoterAction = voterId => {
    return({type: EDIT_VOTER, voterId});
}

export const createCancelVoterAction = () => ({ type: CANCEL_VOTER });

export const createRemoveVoterAction = voterId => ({ type: REMOVE_VOTER, voterId });

export const createReplaceVoterAction = voter => ({ type: REPLACE_VOTER, voter });

export const createGetVoterListAction = () => ({type: GET_VOTER_LIST,});

export const createSortVotersAction = (col) => ({ type: SORT_VOTERS, col });