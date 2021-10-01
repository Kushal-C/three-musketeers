import { combineReducers } from "redux";
import { electionsReducer, setActiveElectionReducer} from "./electionsReducer.js";
import { votersReducer, voterEditReducer } from "./votersReducer.js";

export const mainReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer,
    editVoterId: voterEditReducer,
    activeElection: setActiveElectionReducer
  });
  
  