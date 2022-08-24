class AlbumsCollection{
    #collection = [];

    fetch(id) {
        return Album
            .getImgByAlbumID(id)
            .then((collection) => {
            this.setList(collection);
        })
    }

    setList(collection) {
        this.#collection = collection;
    }

    getList() {
        return this.#collection;
    }
}