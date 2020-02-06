import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

const intialState = {
    todos: [
        {body: 'Buy some milk'},
        {body: 'Walking with a dog'}
    ]
};
const middleWare = [thunk]

const store = createStore(
    rootReducer, 
    intialState, 
    applyMiddleware(...middleWare)
);

export default store;