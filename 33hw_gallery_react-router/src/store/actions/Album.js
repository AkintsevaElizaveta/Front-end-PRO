import AlbumApi from "./AlbumApi";

export const ACTION_ALBUM_FETCH_LIST = 'fetch_list'

export function fetchList() {
    return dispatch => {
        AlbumApi.getImgByAlbumID()
            .then((list) => {
                dispatch({ type: ACTION_ALBUM_FETCH_LIST, payload: list });
            });
    };
}