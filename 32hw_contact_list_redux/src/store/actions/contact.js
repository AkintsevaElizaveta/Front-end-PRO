import ContactsApi from '../../ContactsApi';

export const ACTION_CONTACT_DELETE = 'remove';
export const ACTION_CONTACT_CREATE = 'create';
export const ACTION_CONTACT_FETCH_LIST = 'fetchList';


export function fetchList() {
    return dispatch => {
        ContactsApi.getList()
            .then((contacts) => {
                dispatch({type: ACTION_CONTACT_FETCH_LIST, payload: contacts});
            });
    };
}

export function deleteItem(id) {
    return dispatch => {
        ContactsApi.delete(id)
            .then(() => {
                dispatch({ type: ACTION_CONTACT_DELETE, payload: id });
            })
    }

}

export function createContact(contact){
    return dispatch => {
        ContactsApi.create(contact)
            .then((newContact) => {
                dispatch({ type: ACTION_CONTACT_CREATE, payload: newContact });
            });
    }
}
