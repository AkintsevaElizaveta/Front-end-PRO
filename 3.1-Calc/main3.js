
function helloVova (){
 updateByName('Vova')

}

function helloValera() {
    updateByName('Valera')
}

function helloMisha() {
    updateByName('Misha')
}

function helloOleg(){
    updateByName('Oleg')
}

function helloOleksii(){
    updateByName('Oleksii')
}

function helloBobbi(){
    updateByName('Bobbi')
}

function updateByName (name){
    let resultShow = document.getElementById("choseName")
    resultShow.innerText = `Hello, ${name}`;
}

function createName() {
    let message = prompt('Enter your name');
    if (validateEnterIfCansel(message)) {
        return;
    }
    while (validateEnter(message)) {
        alert('Enter your name')
        message = prompt('Enter your name');
        if (validateEnterIfCansel(message)) {
            return;
        }
    }
    createButton(message);
}



     // let message = prompt('Enter your name')
     // if (validateEnter(message)) {
     //     alert('Enter your name')
     // } else {
     //     createButton(message)
     // }

 function validateEnter(entry){

    return entry === ' ' ||  entry === '';
 }

 function createButton(titleBtn){
     let btn = document.createElement("button");
     btn.innerHTML = titleBtn;
     btn.className = 'btn';
     let container = document.getElementById('btnCont')
     container.append(btn);
 }

 function validateEnterIfCansel(entry){
    return entry === undefined || entry === null ;
 }



function addAction(){
    let operandFirst = document.getElementById('userNumber1');
    let operandSecond = document.getElementById('userNumber2');
    if (validateinput(operandFirst) && validateinput(operandSecond)){
        alert(`${operandFirst.value} + ${operandSecond.value} = ${Number(operandFirst.value) + Number(operandSecond.value)}`)
    }else alert("enter number")
}

function subAction(){
    let operandFirst = document.getElementById('userNumber1');
    let operandSecond = document.getElementById('userNumber2');
    if (validateinput(operandFirst) && validateinput(operandSecond)){
        alert(`${operandFirst.value} - ${operandSecond.value} = ${Number(operandFirst) - Number(operandSecond)}`)
    }else alert("enter number")
}

function multAction(){
    let operandFirst = document.getElementById('userNumber1');
    let operandSecond = document.getElementById('userNumber2');
    if (validateinput(operandFirst) && validateinput(operandSecond)){
        alert(`${operandFirst.value} * ${operandSecond.value} = ${Number(operandFirst) * Number(operandSecond)}`)
    }else alert("enter number")
}

function divAction(){
    let operandFirst = document.getElementById('userNumber1');
    let operandSecond = document.getElementById('userNumber2');
    if (validateInput(operandFirst) && validateInput(operandSecond)){
        alert(`${operandFirst.value} / ${operandSecond.value} = ${Number(operandFirst) / Number(operandSecond)}`)
    }else alert("enter number")
}

function validateUserNumber(enteredNum){
    return !isNaN(enteredNum);
}
function validateInput(input){
    if (validateUserNumber(input.value)){
        input.className = 'input_field'
        return true
    }else {
        input.className = 'input_field input_field_error'
        return false;
    }
}

let arrNumber = [1,34,566,78,645,323,5,65,77,5432,56677,15];
let maxNum = Math.max.apply(null, arrNumber);
console.log(maxNum);
let minNum = Math.min.apply(null, arrNumber);
console.log(minNum);

function getMaxNum(arrNumber){
    let i = arrNumber.length;
    maximum = arrNumber[i - 1];
    while (i--){
        if (arrNumber[i] > maximum){
            maximum = arrNumber[i]
        }
    }return maximum;
}
let max = getMaxNum(arrNumber)
console.log(max);

function getMinNum(arrNumber){
    let i = arrNumber.length;
    minimum = arrNumber[i - 1];
    while (i--){
        if (arrNumber[i] < minimum){
            minimum = arrNumber[i]
        }
    }
    return minimum;
}
let min = getMinNum(arrNumber)
console.log(min);