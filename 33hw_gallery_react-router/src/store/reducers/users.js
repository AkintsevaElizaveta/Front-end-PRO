import {ACTION_USERS_FETCH_LIST} from '../actions/Users';

const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_USERS_FETCH_LIST:
            return [...payload];
        default:
            return state;
    }
}