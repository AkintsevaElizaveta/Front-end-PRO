class Controller {
    #$rootContainer;

    constructor($container) {

        this.#$rootContainer = $container;

        this.collection = new Collection();
        this.todoListView = new View({
            onDelete: id => this.collection.delete(id).then(() => this.renderList()),
            onChangeStatus: id => {
                let todo = this.collection.find(id)
                todo.status = !todo.status

                this.collection.update(id, todo).then(() => this.renderList())
            },
        });

        this.todoListView.appendTo(this.#$rootContainer);
        this.collection.fetch().then(() => this.renderList())

    }

    renderList() {
        this.todoListView.renderList(this.collection.getList());
    }

}