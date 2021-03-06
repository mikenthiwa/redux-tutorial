import {combineReducers} from 'redux';
import usersReducer from './usersReducers';

export default combineReducers({
  fetchUsers: usersReducer
})