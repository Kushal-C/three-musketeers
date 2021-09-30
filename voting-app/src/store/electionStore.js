import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { mainReducer } from '../reducers/mainReducer';

let composeEnhancers = composeWithDevTools({
  name: 'Election Tool'
});

let middleware;

if (process.env.NODE_ENV !== "production") {
  middleware = composeEnhancers();
}


export const electionStore = createStore(
  mainReducer,
  middleware,
);