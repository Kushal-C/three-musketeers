import { combineReducers } from "redux";
import { electionsReducer, setActiveElectionReducer} from "./electionsReducer.js";
import { votersReducer, voterEditReducer, votersSortReducer } from "./votersReducer.js";

export const mainReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer,
    editVoterId: voterEditReducer,
    votersSort: votersSortReducer,
    activeElection: setActiveElectionReducer
  });
  
  