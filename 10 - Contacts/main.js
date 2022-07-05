'use strict'

let contactList = document.querySelector('#contactsList')
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', addListTemplate)
contactList.addEventListener('click', onContactListClick)


function addListTemplate(){
    let userName = document.querySelector('#userName').value;
    let userLastName = document.querySelector('#userLastName').value;
    let userTel = document.querySelector('#userTel').value;

    if(!validateEmpty(userName) || !validateEmpty(userLastName) || !validateEmpty(userTel)){
        alert('Поле не може бути порожнім')
        return;
    }

    if(!validateOnlyLetters(userName) || !validateOnlyLetters(userLastName)){
        alert("Ім'я та прізвіще можуть містити тількі літери");
        return;
    }

    if (!validatePhoneNumber(userTel)){
        alert('Введіть коректний номер телефону')
        return;
    }


    let listTemplates = document.querySelector('#listTemplates').innerHTML;

    const listTemplateHTML = listTemplates
        .replace('{userName}', userName)
        .replace('{userLastName}', userLastName)
        .replace('{userTel}', userTel);
    contactList.insertAdjacentHTML('beforeend', listTemplateHTML)
    clearAllFields()
}

function onContactListClick(e) {
    const classList = e.target.classList;

    if (classList.contains('delete_btn')) {
        e.target.closest('.contact_item').remove()
    }
}

function validateEmpty(enter){
    let enterText = enter.trim();
    return enterText !== '';
}

function validatePhoneNumber(userTel){
    return userTel.length === 13 && userTel.startsWith('+380') && !isNaN(userTel);
}

function validateOnlyLetters(enter) {
    let letters = /^[A-Za-z]+$/;
    return enter.match(letters);

}

function clearField(field, defaultValue = ''){
    field.value = defaultValue;
}

function clearAllFields(){
    clearField(document.querySelector('#userName'));
    clearField(document.querySelector('#userLastName'));
    clearField(document.querySelector('#userTel'), '+380');
}

