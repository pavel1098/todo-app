import { ACTION_DELETE_TODO, ACTION_ADD_TODO } from '../actions/types';


export const addTodo = (todoData) => dispatch => {
    return  dispatch({
        type: ACTION_ADD_TODO,
        payload: todoData
    });
} 