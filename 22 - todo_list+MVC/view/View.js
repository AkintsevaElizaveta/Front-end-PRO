class View {

    static TODO_LIST_SELECTOR = '#usersList';
    static USERS_ITEM_SELECTOR = '.item';
    static DELETE_BTN_SELECTOR = '.delete_btn';
    static SELECTED_ITEM_CLASS = 'selected_item';

    #$listEl;
    #options;

    constructor(options) {
        this.#$listEl = $(View.TODO_LIST_SELECTOR)
            .on('click', View.DELETE_BTN_SELECTOR, (e) => this.onDeleteBtnClick(e))
            .on('click', View.USERS_ITEM_SELECTOR, (e) => this.onChangeStatus(e))
        
        this.#options = options;
    }

    onDeleteBtnClick(e) {
        e.stopPropagation();

        const id = this.getTodoItemId(e.target);

        this.#options.onDelete(id);
    }

    onChangeStatus(e){
        e.stopPropagation();

        const id = this.getTodoItemId(e.target);

        this.#options.onChangeStatus(id);
    }

    getTodoItemId(el) {
        return el.closest(View.USERS_ITEM_SELECTOR)?.dataset.id;
    }

    appendTo($el) {
        $el.append(this.#$listEl);
    }

    renderList(list) {
        const html = list.map(todo => this.generateTodoHTML(todo)).join('');

        this.#$listEl.html(html);
    }

    generateTodoHTML(todo) {
        const status = todo.status ? View.SELECTED_ITEM_CLASS : '';

        return `
        <li class="item ${status}" data-id="${todo.id}" >
            <div>
                <strong>${todo.title}</strong>
            </div>
            <div>
                <button class="btn delete_btn" id="deleteBtn">ВИДАЛИТИ</button>
            </div>
        </li>
    `;
    }
}