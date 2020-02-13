import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

export const initialState = {
    todos: [
        {id: 1, title: 'Buy some milk'},
        {id: 2, title: 'Walking with a dog'}
    ]
}


const middleWare = [thunk]

const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleWare)
);

export default store;