import { EDIT_VOTER, CANCEL_VOTER, SORT_VOTERS, GET_VOTER_LIST_DONE } from "../actions/voterActions";

export const voterEditReducer = ( voterId = -1, action) => {
    switch(action.type){
        case action.type.endsWith("DONE"):
            return -1;
        case EDIT_VOTER:
            return action.voterId;
        case CANCEL_VOTER:
            return -1;
        default:
            return voterId;    
    }
}

export const votersReducer = ( voters = [], action ) => {
    switch(action.type) {
        case GET_VOTER_LIST_DONE:
            return action.voters;
        default:
            return voters;    
    }
};

export const votersSortReducer = (votersSort = { col: 'id', dir: 'asc' }, action) => {
    if (action.type === SORT_VOTERS) {
      if (action.col === votersSort.col) {
        return { col: votersSort.col, dir: votersSort.dir === 'asc' ? 'desc' : 'asc' };
      } else {
        return { col: action.col, dir: 'asc' };
      };
    }
  
    return votersSort;
  };