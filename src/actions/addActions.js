import { ACTION_ADD_TODO } from './types';


export const addTodo = (todoData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(todoData),
        headers: {
         'Content-type': 'application/json'
        }
        
    })
    .then(res => res.json())
    .then(todos => {
        dispatch({
            type: ACTION_ADD_TODO,
            payload: todos
        });
    })
} 