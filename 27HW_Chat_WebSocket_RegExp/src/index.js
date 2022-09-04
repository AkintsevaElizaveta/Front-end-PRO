import style from './style.scss'

const MESSAGES_LIST_SELECTOR = '.chat_container';
const NAME_INPUT_SELECTOR = '#nameField';
const MESSAGE_INPUT_SELECTOR = '#messageField';
const SEND_BTN_SELECTOR = '.send_btn';

const userName = document.querySelector(NAME_INPUT_SELECTOR);
const userMessage = document.querySelector(MESSAGE_INPUT_SELECTOR);
const messagesList = document.querySelector(MESSAGES_LIST_SELECTOR);
const sendBtn = document.querySelector(SEND_BTN_SELECTOR);

let socket;

sendBtn.addEventListener('click', onSendBtnClick)

initConnection();

function onSendBtnClick(){
       if(validateEmpty(userName) && validateEmpty(userMessage)){
           socket.send(JSON.stringify({
               username: userName.value,
               message: userMessage.value,
           }));
       }
}

function initConnection() {
    socket = new WebSocket('wss://fep-app.herokuapp.com');

    subscribeSocketEvents();
}

function subscribeSocketEvents(){
    socket.onopen = () => {
        socket.send(JSON.stringify({
            username: 'System',
            message: 'New user connected',
        }));
    };

    socket.onclose = () => {
        initConnection();
    };

    socket.onerror = (event) => {
        alert(`'Error', ${event.data}`);
    };

    socket.onmessage = (event) => {
        try {
            renderNewMessage(event)
            clearField(userMessage);

        } catch (e) {
            alert(`'Error', ${event.data}`);
        }
    };
}

function renderNewMessage(response){
    const res = JSON.parse(response.data);
    let item = generateHtml(res);

    messagesList.insertAdjacentHTML('beforeend', item);
}

function generateHtml(response){
    return`
    <li class="${style.chat_container_item}">
       <span class="${style.chat_container_name}">${response.username}:</span>
       <span class="${style.chat_container_message}">${response.message}</span>
    </li>
    `
}

function validateEmpty(enter){
    let enterValue = enter.value.trim();
    return enterValue !== '';
}

function clearField(field){
    field.value = '';
}
