import { combineReducers } from "redux";
import { electionsReducer, setActiveElectionReducer} from "./electionsReducer.js";
import { votersReducer } from "./votersReducer.js";

export const mainReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer,
    activeElection: setActiveElectionReducer
  });
  
  