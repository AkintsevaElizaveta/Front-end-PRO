class Collection {

    #list = [];

    fetch() {
        return TodoApi.getList().then((list) => {
            this.setList(list);
        })
    }

    setList(list) {
        this.#list = list;
    }

    getList() {
        return this.#list;
    }

    update(id, todo) {
        let index = this.#list.indexOf(todo);

        TodoApi.update(id, todo)
            .then(res => this.#list[index] = res);

        return Promise.resolve();
    }

    find(id) {
        return this.#list.find(c => c.id === id);
    }

    delete(id) {
        this.#list = this.#list.filter(item => item.id !== id);

        TodoApi.delete(id);

        return Promise.resolve();
    }
}