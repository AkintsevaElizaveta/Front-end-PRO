export default class TodoApi {
    static URL = 'https://62e3d1843c89b95396d11a75.mockapi.io/todos/';

    static request(url = '', method = 'GET', body) {
        return fetch(TodoApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            },
        })
            .catch((e) => {
                throw new Error(` ${e.message}`);
            });
    }

    static getList() {
        return TodoApi
            .request()
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error("Can't get todos list");
            });
    }

    static create(todo) {
        return TodoApi
            .request('', 'POST', todo)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error("Can't create new todo item");
            });
    }

    static update(id, changes) {
        return TodoApi
            .request(id, 'PUT', changes)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error(`Can't update todo item with id ${id}`);
            });
    }

    static delete(id) {
        return TodoApi
            .request(id, 'DELETE')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error(`Can't delete todo item with id ${id}`);
            });
    }
}