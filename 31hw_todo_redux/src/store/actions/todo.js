export const ACTION_TODO_DELETE = 'remove';
export const ACTION_TODO_CHANGE_STATUS = 'toggleStatus';
export const ACTION_TODO_CREATE = 'create';

export function deleteItem(id) {
    return { type: ACTION_TODO_DELETE, payload: id };
}

export function createTodo(newItem){
    return { type: ACTION_TODO_CREATE, payload: newItem }
}

export function changeStatus(id) {
    return { type: ACTION_TODO_CHANGE_STATUS, payload: id };
}
