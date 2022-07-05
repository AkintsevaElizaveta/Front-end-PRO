'use strict'

let userText = document.querySelector('#usersText');
let list = document.querySelector('.list');
let button = document.querySelector('#createItem');
let popUp = document.querySelector('#popUp');
let popUpBtn = document.querySelector('#popUpBtn');

button.addEventListener('click', createListItem)
popUpBtn.addEventListener('click', closePopUp)

function createListItem() {
    let listItem = document.createElement('li');
    let userInput = userText.value.trim()
    console.log(userInput)
    if (userInput !== ''){
        listItem.textContent = userText.value;
        list.append(listItem);
    }else{
        popUp.style.display = 'flex';
    }

    userText.value = null
}

function closePopUp(){
    popUp.style.display = 'none';
}