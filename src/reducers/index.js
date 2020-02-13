import { ACTION_ADD_TODO, ACTION_DELETE_TODO, GET_TODOS } from '../actions/types';


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
                todos: [...state.todos, {id: action.payload.id, title: action.payload.body}]
            
            };
        case ACTION_DELETE_TODO:
            return {
                todos: state.todos.filter((todo) => 
                    todo.id !== action.id
                  )};
        case GET_TODOS: 
                return {
                    ...state,
                    todos: action.payload
                }
        default:
            return state;
    }
}

export default reducer;
