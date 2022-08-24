class LinksCollection {
    #list

    fetch() {
        return Albums.getList().then((list) => {
            this.setList(list);
        })
    }

    setList(list) {
        this.#list = list;
    }

    getList() {
        return this.#list;
    }

    getFirstId(){
        return this.#list[0].id
    }
}
