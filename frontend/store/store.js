import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/root_reducer';


export const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )

  // add logger for debugging by replacing line 12 with
    // applyMiddleware(thunk, logger)
    // (import logger from 'redux-logger')
);