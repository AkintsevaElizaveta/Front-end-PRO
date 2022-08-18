class Controller {
    #$rootContainer;

    constructor($container) {
        this.#$rootContainer = $container;
        this.collection = new Collection();
        this.todoListView = new View({
            onDelete: id => this.collection.delete(id).then(() => this.renderList()),
            onChangeStatus: id => this.collection.toggleStatus(id)
                .then((todo) => this.collection.update(id, todo))
                .then(() => this.renderList()),
        });

        this.todoListView.appendTo(this.#$rootContainer);
        this.collection.fetch().then(() => this.renderList())

    }

    renderList() {
        this.todoListView.renderList(this.collection.getList());
    }

}