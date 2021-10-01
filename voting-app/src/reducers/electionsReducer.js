import { SET_ACTIVE_ELECTION ,GET_ELECTION_LIST_DONE} from '../actions/electionActions';

export const electionsReducer = ( elections = [], action) => {
    switch(action.type){
        case GET_ELECTION_LIST_DONE:
            return action.elections;
        default:
            return elections;
    }
};

export const setActiveElectionReducer = (election = {}, action) => {
    switch(action.type){
        case SET_ACTIVE_ELECTION:
            return action.election;
        default:
            return election;
    }
}