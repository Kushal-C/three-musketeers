export const VERIFY_VOTER_INFORMATION = "VERIFY_VOTER_INFORMATION";

export const createVerifyVoterInformationAction = voterInfo => {
    return ({ type: VERIFY_VOTER_INFORMATION, voterInfo });
}
