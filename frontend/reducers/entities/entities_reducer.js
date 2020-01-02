import { combineReducers } from 'redux';
import users from './users_reducer';

export const entitiesReducer = combineReducers({
  users
});