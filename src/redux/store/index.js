import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers';
import thunk from 'redux-thunk'

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);