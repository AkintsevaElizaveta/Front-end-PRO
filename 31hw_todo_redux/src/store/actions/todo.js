export const ACTION_TODO_DELETE = 'remove';
export const ACTION_TODO_CHANGE_STATUS = 'toggleStatus';

export function deleteItem(id) {
    return { type: ACTION_TODO_DELETE, payload: id };
}

export function changeStatus(id) {
    return { type: ACTION_TODO_CHANGE_STATUS, payload: id};
}
