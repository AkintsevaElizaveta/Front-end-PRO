class AlbumsController{
    #$rootAlbumContainer

    constructor(albumContainer) {
        this.#$rootAlbumContainer = albumContainer;
        this.collection = new AlbumsCollection();
        this.albumView = new AlbumsView();

        this.albumView.appendTo(this.#$rootAlbumContainer);
    }

    renderList() {
        this.albumView.renderImgList(this.collection.getList());
    }

    loadAlbumById(id){
        this.collection.fetch(id).then(() => this.renderList())
    }
}
