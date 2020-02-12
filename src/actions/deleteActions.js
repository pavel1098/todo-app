import { ACTION_DELETE_TODO } from './types'

export const deleteTodo = (id) => dispatch => {
//debugger
    return dispatch({
        type: ACTION_DELETE_TODO,
        id: id
    });
}