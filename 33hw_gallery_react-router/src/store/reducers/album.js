import {ACTION_ALBUM_FETCH_LIST} from "../actions/Album";

const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_ALBUM_FETCH_LIST:
            return [...payload];
        default:
            return state;
    }
}