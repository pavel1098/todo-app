import { ACTION_ADD_TODO } from './types';


export const addTodo = (todoData) => dispatch => {
    return dispatch({
        type: ACTION_ADD_TODO,
        payload: todoData
    });
} 