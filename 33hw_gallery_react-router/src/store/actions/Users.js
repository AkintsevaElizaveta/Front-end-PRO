import UsersApi from "./UsersApi";

export const ACTION_USERS_FETCH_LIST = 'fetch_list'

export function fetchList() {
    return dispatch => {
        UsersApi.getList()
            .then((list) => {
                dispatch({ type: ACTION_USERS_FETCH_LIST, payload: list });
            });
    };
}