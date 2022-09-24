import {ACTION_TODO_DELETE, ACTION_TODO_CHANGE_STATUS, ACTION_TODO_CREATE} from "../actions/todo";

const INITIAL_STATE = {
    todos: [
        {"title": "item 1", "status": true, "id": "1"},
        {"title": "item 2", "status": false, "id": "2"},
        {"title": "item 3", "status": true, "id": "3"},
    ],
};

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_TODO_CREATE :
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case ACTION_TODO_DELETE:
            return { ...state, todos: state.todos.filter(todo => todo.id !== payload) };
        case ACTION_TODO_CHANGE_STATUS:
            return {...state, todos: state.todos.map(
                    todo => todo.id === payload
                        ? {
                            ...todo,
                            status: !todo.status
                        }
                        : todo
                ),}
        default:
            return state;
    }
}