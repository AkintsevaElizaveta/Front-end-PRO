'use strict'

const DELETE_BTN_CLASS = 'delete_btn';
const USERS_ITEM_SELECTOR = '.item';
const USERS_ITEM_CLASS = 'item';
const SELECTED_ITEM_CLASS = 'selected_item';
const SHOW_POP_UP_STYLE = 'flex';
const CLOSE_POP_UP_STYLE = 'none';

const usersText = document.querySelector('#usersText');
const usersList = document.querySelector('#usersList');
const itemTemplate = document.querySelector('#itemTemplate').innerHTML;
const addBtn = document.querySelector('#addItemBtn');
const popUp = document.querySelector('#popUp');
const popUpBtn = document.querySelector('#popUpBtn');

addBtn.addEventListener('click', onAddBtnClick)
usersList.addEventListener('click', onUsersListClick)
popUpBtn.addEventListener('click', onPopUpBtnClick)

function onAddBtnClick(){
    if (!validateEmpty(usersText.value)){
        popUp.style.display = SHOW_POP_UP_STYLE;
        return;
    }

    addItemTemplate(usersText.value);
    clearField(usersText);
}

function onUsersListClick(e) {
    const classList = e.target.classList;

    if (classList.contains(DELETE_BTN_CLASS)) {
        e.target.closest(USERS_ITEM_SELECTOR).remove()
    }
    if (classList.contains(USERS_ITEM_CLASS)) {
        e.target.classList.toggle(SELECTED_ITEM_CLASS)
    }
}

function onPopUpBtnClick(){
    popUp.style.display = CLOSE_POP_UP_STYLE;
}

function validateEmpty(enter){
    let enterText = enter.trim();
    return enterText !== '';
}

function addItemTemplate(text){
    const itemTemplateHTML = itemTemplate.replace('{message}', text)
    usersList.insertAdjacentHTML('beforeend', itemTemplateHTML)
}

function clearField(field){
    field.value = '';
}

