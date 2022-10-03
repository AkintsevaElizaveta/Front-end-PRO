export default class AlbumsApi{

    static URL = 'https://jsonplaceholder.typicode.com/albums';

    static request(url = '', method = 'GET', body) {
        return fetch(AlbumsApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            },
        })
            .catch((e) => {
                throw new Error(`${e.message}`);
            });
    }

    static getList() {
        return AlbumsApi
            .request()
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Can't get the list of albums.");
            });
    }

}