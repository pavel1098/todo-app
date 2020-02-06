import { combineReducers } from 'redux';
import addReducer from './addReducer.js';

export default combineReducers({
    todos: addReducer
});