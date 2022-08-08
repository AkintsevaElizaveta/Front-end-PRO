class Album {

    static URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';

    static request(url = '', method = 'GET', body) {
        return fetch(Album.URL + url, {
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
    static getImgByID(id) {
        return Album
            .request(id)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Can't get images.");
            });
    }
}
