// keep track of ANY error messages
// will combine all of our error handling reducers here

import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session_errors_reducer';

export const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});