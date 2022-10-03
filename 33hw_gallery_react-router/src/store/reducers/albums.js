import {ACTION_ALBUMS_FETCH_LIST} from "../actions/Albums";

const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_ALBUMS_FETCH_LIST:
            return [...payload];
        default:
            return state;
    }
}