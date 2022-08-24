class LinksController{
    #$rootContainer;
    #albumsController

    constructor($container, albumsController) {
        this.#$rootContainer = $container;
        this.#albumsController = albumsController;
        this.collection = new LinksCollection();
        this.linksView = new LinksView({
                onSelect: id => albumsController.loadAlbumById(id)
        })

        this.linksView.appendTo(this.#$rootContainer);
        this.collection.fetch()
            .then(() => this.renderList())
            .then(() => this.loadFirstAlbum())
    }

    renderList() {
        this.linksView.renderAlbumsList(this.collection.getList());
    }

    loadFirstAlbum(){
       const firstAlbumId =  this.collection.getFirstId();
       this.#albumsController.loadAlbumById(firstAlbumId)
    }
}
