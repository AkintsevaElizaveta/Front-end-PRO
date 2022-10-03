import AlbumsApi from "./AlbumsApi";

export const ACTION_ALBUMS_FETCH_LIST = 'fetch_list'

export function fetchList() {
    return dispatch => {
        AlbumsApi.getList()
            .then((list) => {
                dispatch({ type: ACTION_ALBUMS_FETCH_LIST, payload: list });
            });
    };
}