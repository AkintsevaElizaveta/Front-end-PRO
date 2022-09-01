class View {
    static STUDENTS_LIST_SELECTOR = '#studentsList';
    static STUDENTS_ITEM_SELECTOR = '.students_container__item';
    static DELETE_BTN_SELECTOR = '.button_delete';
    static MARKS_FIELD_SELECTOR = '.students_container__marks';
    static MARKS_FIELD_CLASS = 'students_container__marks';
    static NEW_STUDENT_CONTAINER_SELECTOR = "#newStudentContainer"
    static NEW_STUDENT_FIELD_CLASS = 'students_container_new_input';
    static NEW_STUDENT_BTN_SELECTOR = '#newStudentBtn';

    #$list;
    #$new;
    #options;

    constructor(options) {
        this.#$list = $(View.STUDENTS_LIST_SELECTOR)
            .on('change', View.MARKS_FIELD_SELECTOR, (e) => this.onMarksFieldClick(e))
            .on('click', View.DELETE_BTN_SELECTOR, (e) => this.onDeleteBtnClick(e))
        this.#$new = $(View.NEW_STUDENT_CONTAINER_SELECTOR)
            .on('click',View.NEW_STUDENT_BTN_SELECTOR,(e) => this.onCreateBtnClick(e))

        this.#options = options;
    }

    onMarksFieldClick(e){
        e.stopPropagation();

        const id = this.getStudentId(e.target);
        const item = e.target.closest(View.STUDENTS_ITEM_SELECTOR);
        const marks = [];

        for(let i = 0; i < item.children.length; i++) {
            if (item.children[i].className.includes(View.MARKS_FIELD_CLASS)) {
                let number = Number(item.children[i].value)
                if(!isNaN(number)){
                    marks.push(number)
                }else {
                    marks.push(0)
                }

            }
        }

        this.#options.onUpdate(id, marks);
    }

    onDeleteBtnClick(e) {
        e.stopPropagation();

        const id = this.getStudentId(e.target);

        this.#options.onDelete(id);
    }

    onCreateBtnClick(e){
        e.stopPropagation();

        const container = e.target.closest('.new_students_container')
        let children = []

        children.push(...container.children)

        const input = children.find(i => i.className.includes(View.NEW_STUDENT_FIELD_CLASS))
        const studentsName = input.value;
        input.value = '';

        this.#options.onCreate(studentsName);
    }

    renderStudentList(list) {
        const html = list.map(list => this.generateHtmlList(list)).join('');

        this.#$list.html(html);
    }

    appendTo($el) {
        $el.append(this.#$list);
    }

    getStudentId(el) {
        return el.closest(View.STUDENTS_ITEM_SELECTOR)?.dataset.id;
    }

    generateHtmlList(item){
        return ` 
       <li class="students_container__item" data-id="${item.id}">
            <strong class="students_container__name">${item.name}</strong>
            ${this.createInputs(item.marks)}
            <button class="button button_delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
            </button>
       </li>
    `;
    }

    createInputs(marks){
        let result = '';

        for (let i = 0; i < marks.length; i++){
            result += `<input type="text" class="students_container__marks" value="${marks[i]}">`
        }

        return result;

    }
}