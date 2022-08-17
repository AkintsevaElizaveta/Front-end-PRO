class TodoApi{
    static ROOT_URI = 'https://62e3d1843c89b95396d11a75.mockapi.io/users/';

    static getList() {
        return fetch(this.ROOT_URI).then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can't get list");
        });
    }

    static update(id, todo) {
        return fetch(this.ROOT_URI + id, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't change item with id - ${id}`);
        });
    }

    static delete(id) {
        return fetch(this.ROOT_URI + id, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't delete item with id - ${id}`);
        });
    }
}