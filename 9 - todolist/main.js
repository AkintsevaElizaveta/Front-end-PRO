'use strict'

let userText = document.querySelector('#usersText');
let list = document.querySelector('.list');
let button = document.querySelector('#createItem');

button.addEventListener('click', createListItem)

function createListItem() {
    let listItem = document.createElement('li');
    let userInput = userText.value.trim()
    console.log(userInput)
    if (userInput !== ''){
        listItem.textContent = userText.value;
        list.append(listItem);
    }else{
        alert("Поле не може бути порожнім. Будь ласка, введіть текст.")
    }

    userText.value = null
}