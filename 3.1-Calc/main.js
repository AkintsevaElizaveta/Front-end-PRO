const ADD = "+";
const SUB = "-";
const MULTIPLE = "*";
const DIVIDED = "/";

let resultShow = document.getElementById("calc_result")

calculation()

function calculation (){
    let usersOperator = prompt("Please, select an action +, -, *, /");
    if (!validateUserOperator(usersOperator)){
        resultShow.innerText = "Choose correct operator";
        return;
    }

    let a = getNumber("Enter the first number");
    if (!a.isNumber){
        resultShow.innerText = "Enter number";
        return;
    }

    let b = getNumber("Enter the second number");
    if (!b.isNumber){
        resultShow.innerText = "Enter number";
        return;
    }

    switch (usersOperator){
        case ADD:
            let resultAdd = a.number + b.number;
            resultShow.innerText = `${a.number} + ${b.number} = ${resultAdd}`;
            break;
        case SUB:
            let resultSub = a.number - b.number;
            resultShow.innerText = `${a.number} - ${b.number} = ${resultSub}`;
            break;
        case MULTIPLE:
            let resultMultiple = a.number * b.number;
            resultShow.innerText = `${a.number} * ${b.number} = ${resultMultiple}`;
            break;
        case DIVIDED:
            if (b.number === 0){
                resultShow.innerText = "Can't be divided by 0";
                return;
            }

            let resultDivided = a.number / b.number;
            resultShow.innerText = `${a.number} / ${b.number} = ${resultDivided}`;
            break;
    }
}

function validateUserOperator(userOperator){
    return userOperator === ADD || userOperator === SUB || userOperator === MULTIPLE || userOperator === DIVIDED;
}

function getNumber(message){
    let value = prompt(message);

    if (validateNumber(value)){
        return {
            number:Number(value),
            isNumber:true
        }
    }
    else {
        return {
            number:null,
            isNumber:false
        }
    }
}

function validateNumber(number){
    return !isNaN(number);
}




