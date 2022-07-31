'use strict'

const ROOT_API_URI = 'https://62e3d1843c89b95396d11a75.mockapi.io/users/'
const DELETE_BTN_CLASS = 'delete_btn';
const USERS_ITEM_SELECTOR = '.item';
const EDIT_BTN_CLASS = 'edit_btn';
const SELECTED_ITEM_CLASS = 'selected_item';
const SHOW_POP_UP_CLASS = 'open';

const todoForm = document.querySelector('#todoForm')
const usersFirstName = document.querySelector('#usersFirstName');
const usersLastName = document.querySelector('#usersLastName');
const usersCountry = document.querySelector('#usersCountry');
const usersList = document.querySelector('#usersList');
const popUp = document.querySelector('#popUp');
const popUpBtn = document.querySelector('#popUpBtn');

todoForm.addEventListener('submit', onTodoFormSubmit)
usersList.addEventListener('click', onUsersListClick)
popUpBtn.addEventListener('click', onPopUpBtnClick)

getTodoList().then(renderTodoList);


function onTodoFormSubmit(e){
    e.preventDefault();
    const todo = getTodo();

    if (todo === undefined){
        return;
    }

    createTodo(todo)
        .then(newTodo => {
                renderTodoItem(newTodo);
                clearForm(todoForm);
        });
}

function onUsersListClick(e) {
    const todoItem = getTodoItem(e.target);
    console.log(todoItem)

    if (todoItem) {
        if (e.target.classList.contains(EDIT_BTN_CLASS)) {
            e.target.closest(USERS_ITEM_SELECTOR).classList.toggle(SELECTED_ITEM_CLASS)
            getTodoList().then(todos => changeStatus(todos, todoItem.dataset.id))

            return;
        }
        if (e.target.classList.contains(DELETE_BTN_CLASS)) {
            e.target.closest(USERS_ITEM_SELECTOR).remove();
            deleteTodoItem(todoItem.dataset.id)
        }
    }
}

function onPopUpBtnClick(){
    popUp.classList.remove(SHOW_POP_UP_CLASS);
}

function getTodo() {
    if(!validateEmpty(usersFirstName) || !validateEmpty(usersLastName) || !validateEmpty(usersCountry)){
        popUp.classList.add(SHOW_POP_UP_CLASS);
        return;
    }
        return {
            firstName: usersFirstName.value,
            lastName: usersLastName.value,
            country: usersCountry.value,
        };
}

function getTodoList() {
    return fetch(ROOT_API_URI).then(res => res.json());
}

function createTodo(todo) {
    return fetch(ROOT_API_URI, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error("Can't create new element");
        });
}

function getTodoItem(el) {
    return el.closest(USERS_ITEM_SELECTOR);
}

function changeStatus(todos, id) {
    const todo = todos.find(item => item.id === id);
    todo.status = !todo.status;

    fetch(`${ROOT_API_URI}${id}`,{
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then(res => res.json());
}

function deleteTodoItem(id){
    fetch(`${ROOT_API_URI}${id}`,{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then(res => res.json());
}

function renderTodoList(list) {
    const html = list.map(generateTodoHtml).join('');
    usersList.insertAdjacentHTML('beforeend', html);
}

function renderTodoItem(todo){
    const todoItemTemplateHTML = generateTodoHtml(todo);
    usersList.insertAdjacentHTML('beforeend', todoItemTemplateHTML);
}

function generateTodoHtml(todo){
    const status = todo.status ? SELECTED_ITEM_CLASS : '';
    return `
        <li class="item ${status}" data-id="${todo.id}" >
            <div>
                <strong>${todo.firstName}</strong>
                <strong>${todo.lastName}, </strong>
                <span>${todo.country}</span>
            </div>
            <div>
                <button class="btn edit_btn" id="editBtn">ЗМІНИТИ СТАТУС</button>
                <button class="btn delete_btn" id="deleteBtn">ВИДАЛИТИ</button>
            </div>
        </li>
    `;
}

function validateEmpty(enterField){
    let enter = enterField.value.trim();
    return enter !== '';
}

function clearForm(form){
    form.reset();
}

