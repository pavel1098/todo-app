import { ACTION_DELETE_TODO, ACTION_ADD_TODO } from '../actions/types';


const initialState = {
    todos: [
        {body: 'Buy some milk'},
        {body: 'Walking with a dog'}
    ],
    todo: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ACTION_ADD_TODO:
            return [
                ...state,
            {body: action.payload.body}
            ];
        default:
            return state;
    }
    }

