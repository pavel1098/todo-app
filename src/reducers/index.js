import { ACTION_ADD_TODO, ACTION_DELETE_TODO } from '../actions/types';


const initialState = {
    todos: [
        {id: 1, body: 'Buy some milk'},
        {id: 2, body: 'Walking with a dog'}
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {id: action.payload.id, body: action.payload.body}]
            
            }
        case ACTION_DELETE_TODO:
            return {
                todos: state.todos.filter((todo) => 
                    todo.id !== action.id
                  )};
        default:
            return state;
    }
}

export default reducer;
