import { GET_TODOS } from './types'

export const getTodos = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res);
        //console.log(res.json());
        return res.json()
    }).then(todos => {
        console.log(todos);
        return dispatch({
            type: GET_TODOS,
            payload: todos
        })});
};

