import {ACTION_CONTACT_CREATE,
        ACTION_CONTACT_DELETE,
        ACTION_CONTACT_FETCH_LIST} from "../actions/contact";

const INITIAL_STATE =[];

export default function contacts(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_CONTACT_CREATE :
            return [...state, payload]
        case ACTION_CONTACT_DELETE:
            return state.filter(todo => todo.id !== payload);
        case ACTION_CONTACT_FETCH_LIST:
            return [...payload];
        default:
            return state;
    }
}