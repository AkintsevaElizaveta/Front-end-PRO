class Collection {
    #list

    fetch() {
        return Students.getList().then((list) => {
            this.setList(list);
        })
    }

    setList(list) {
        this.#list = list;
    }

    getList() {
        return this.#list;
    }

    find(id) {
        return this.#list.find(c => c.id === id);
    }

    delete(id) {
        this.#list = this.#list.filter(item => item.id !== id);

        return Students.delete(id);
    }

    update(id, marks){
        return Students.update(id, marks)
    }

    create(name){
        return Students.create(name)
            .then(student => this.#list.push(student));
    }
}