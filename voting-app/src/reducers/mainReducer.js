import { electionsReducer } from "./electionsReducer.js";
import { votersReducer } from "./votersReducer.js";

export const mainReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer
  });
  
  