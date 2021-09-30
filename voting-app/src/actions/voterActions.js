export const VERIFY_VOTER_INFORMATION = "VERIFY_VOTER_INFORMATION";
export const SET_ACTIVE_VOTER = "SET_ACTIVE_VOTER";

export const createVerifyVoterInformationAction = voterInfo => {
    return ({ type: VERIFY_VOTER_INFORMATION, voterInfo });
}

export const createSetActiveVoterAction = voter => {
    return({type: SET_ACTIVE_VOTER, voter});
}