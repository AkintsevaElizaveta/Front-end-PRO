export  default class ContactsApi {
    static URL = 'https://62e3d1843c89b95396d11a75.mockapi.io/contacts/';

    static request(url = '', method = 'GET', body) {
        return fetch(ContactsApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            },
        })
            .catch((e) => {
                throw new Error(`Contacts can not execute request: ${e.message}`);
            });
    }

    static getList() {
        return ContactsApi
            .request()
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Can't retrieve contact list");
            });
    }

    static create(list) {
        return ContactsApi
            .request('', 'POST', list)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Can't create new contact");
            });
    }

    static delete(id) {
        return ContactsApi
            .request(id, 'DELETE')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(`Can't delete contact with id "${id}"`);
            });
    }
}
