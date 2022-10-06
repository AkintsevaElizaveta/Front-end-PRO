export default class Api {
    static URL = 'https://jsonplaceholder.typicode.com/';

    static request(url = '', method = 'GET', body) {
        return fetch(Api.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            },
        })
            .catch((e) => {
                throw new Error(`${e.message}`);
            })
    }

    static getUsers(params) {
        return Api
            .request(params)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error(`Can't get users list`);
            });
    }

    static getAlbums(params) {
        return Api
            .request(params)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error(`Can't get albums list`);
            });
    }

    static getPhotos(params) {
        return Api
            .request(params)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error(`Can't get photos for album`);
            });
    }
}