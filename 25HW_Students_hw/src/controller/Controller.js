class Controller{
    #$rootContainer;

    constructor($container) {
        this.#$rootContainer = $container;
        this.collection = new Collection();
        this.View = new View({
            onDelete: id => this.collection.delete(id).then(() => this.renderList()),
            onUpdate: (id, marks) => this.collection.update(id, marks)
                .then(() => this.renderList()),
            onCreate: name => this.collection.create(name).then(() => this.renderList())
        })

        this.View.appendTo(this.#$rootContainer);
        this.collection.fetch()
            .then(() => this.renderList());
    }

    renderList() {
        this.collection.fetch()
            .then(() => this.View.renderStudentList(this.collection.getList()));
    }

}