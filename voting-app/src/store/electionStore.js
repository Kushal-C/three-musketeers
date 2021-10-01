import thunk from "redux-thunk";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { mainReducer } from '../reducers/mainReducer';

let composeEnhancers = composeWithDevTools({
  name: 'Election Tool'
});

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production") {
  middleware = composeEnhancers(middleware);
}

export const electionStore = createStore(
  mainReducer,
  middleware,
);