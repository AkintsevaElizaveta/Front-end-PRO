const ADD = "+";
const SUB = "-";
const MULTIPLE = "*";
const DIVIDED = "/";

startCalc();

function startCalc() {
    let userOperator = getOperator()
    console.log(userOperator)

    let count = getOperandsCount()
    console.log(count)

    let arrOperands = getOperands(count)
    console.log(arrOperands)

    let Result = countResult(userOperator, arrOperands)
    console.log(Result);

    let resultString = formatResult(userOperator, arrOperands, Result)
    console.log(resultString);

    showResult(resultString)
}


function getOperator() {
    let operator;
    do {
        operator = prompt('Choose action');
    } while (!validateUserOperator(operator));
    return operator;
}

function getOperandsCount() {
    let count;
    do {
        count = getNumber('Enter count of operands')
    } while (!count.isNumber || !validateRange(count.number));
    return count.number;
}


function getOperands(count) {
    let arrOperands = [];
    for (i = 0; i < count; i++) {
        let operand = getOperand(i)
        arrOperands.push(operand)
    }
    return arrOperands;
}

function getOperand(operandName) {
    let operand;
    do {
        operand = getNumber(`Enter ${operandName}`);
    } while (!operand.isNumber);
    return operand.number;
}

function validateRange(count) {
    return ((count > 1) && (count < 5))
}

function countResult(operator, operands) {
    switch (operator) {
        case ADD:
            let sum = 0;
            for (i = 0; i < operands.length; i++){
                sum += operands[i];
            }
            return sum;
        case SUB:
            let sub = 0;
            for (i = 0; i < operands.length; i++){
                sub -= operands[i];
            }
            return sub;
        case MULTIPLE:
            let multi = operands[0];
            for (i = 1; i < operands.length; i++){
                multi *= operands[i];
            }
            return multi;
        case DIVIDED:
            let div = operands[0];
            for (i = 1; i < operands.length; i++){
                div /= operands[i];
            }
            return div;
    }
}

function formatResult(operator, operands, countResult) {

    let result = '';
    for(i = 0; i < operands.length; i++){
        if (i<operands.length-1){
            result += `${operands[i]} ${operator} `;
        }else{
            result +=`${operands[i]} = ${countResult}`
        }
    }
    return result;
}

function showResult(result) {
    alert(result)
}

function validateUserOperator(operator) {
    return operator === ADD || operator === SUB || operator === MULTIPLE || operator === DIVIDED;
}

function getNumber(message) {
    let value = prompt(message);

    if (validateNumber(value)) {
        return {
            number: Number(value),
            isNumber: true
        }
    } else {
        return {
            number: null,
            isNumber: false
        }
    }
}

function validateNumber(number) {
    return !isNaN(number);
}

