'use strict'

let contactList = document.querySelector('#contactsList')
const addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', onAddBtnClick)
contactList.addEventListener('click', onContactListClick)

function onAddBtnClick(){
    let userName = document.querySelector('#userName').value;
    let userLastName = document.querySelector('#userLastName').value;
    let userTel = document.querySelector('#userTel').value;

    if (!validateAllFields(userName, userLastName, userTel)){
        return;
    }

    addItemTemplate(userName, userLastName, userTel)
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

function validateAllFields(firstName, lastName, phoneNumber){
    if(!validateEmpty(firstName) || !validateEmpty(lastName) || !validateEmpty(phoneNumber)){
        alert('Поле не може бути порожнім')
        return false;
    }

    if(!validateOnlyLetters(firstName) || !validateOnlyLetters(lastName)){
        alert("Ім'я та прізвіще можуть містити тількі літери");
        return false;
    }

    if (!validatePhoneNumber(phoneNumber)){
        alert('Введіть коректний номер телефону')
        return false;
    }
    return true;
}

function addItemTemplate(firstName, lastName, phoneNumber){
    let listTemplates = document.querySelector('#listTemplates').innerHTML;

    const listTemplateHTML = listTemplates
        .replace('{userName}', firstName)
        .replace('{userLastName}', lastName)
        .replace('{userTel}', phoneNumber);
    contactList.insertAdjacentHTML('beforeend', listTemplateHTML)
}

function clearField(field, defaultValue = ''){
    field.value = defaultValue;
}

function clearAllFields(){
    clearField(document.querySelector('#userName'));
    clearField(document.querySelector('#userLastName'));
    clearField(document.querySelector('#userTel'), '+380');
}

