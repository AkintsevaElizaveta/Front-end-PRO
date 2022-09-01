class Students{

    static ROOT_URI = 'https://62e3d1843c89b95396d11a75.mockapi.io/students';

    static request(settings) {
        const setting = {
            uri: '',
            method: 'GET',
            data: null,
            error: 'API request error.',
            ...settings,
        };

        return fetch(`${this.ROOT_URI}/${setting.uri}`, {
            method: setting.method,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: setting.data ? JSON.stringify(setting.data) : undefined,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error(setting.error);
            });
    }

    static getList() {
            return this.request({ error: "Can't fetch students" });
    }

    static create(name) {
        let student = {
            name: name,
            marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }

        return this.request({ method: 'POST', data: student, error: "Can't create student" });
    }

    static update(id, marks) {
        let student = {
            marks: marks,
        }

        return this.request({ uri: `/${id}`, method: 'PUT', data: student, error: "Can't update the student."});
    }


    static delete(id) {
        return this.request({ uri: `/${id}`, method: 'DELETE', error: "Can't delete the student."});
    }

}