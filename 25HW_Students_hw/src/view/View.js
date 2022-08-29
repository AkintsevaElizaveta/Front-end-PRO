class View {
    static STUDENTS_LIST_SELECTOR = '#studentsList';
    static STUDENTS_ITEM_SELECTOR = '.students_container__item';
    static DELETE_BTN_SELECTOR = '.delete_btn';
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
                marks.push(Number(item.children[i].value))
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
            <strong>${item.name}</strong>
            ${this.createInputs(item.marks)}
            <button class="delete_btn">DELETE</button>
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