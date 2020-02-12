import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

export const initialState = {
    todos: [
        {id: 1, body: 'Buy some milk'},
        {id: 2, body: 'Walking with a dog'}
    ]
}


const middleWare = [thunk]

const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleWare)
);

export default store;