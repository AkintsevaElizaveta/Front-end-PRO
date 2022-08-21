const addModule = require('./src/add.js');
const subModule = require('./src/sub.js')
const multModule = require('./src/mult.js')
const divModule = require('./src/div.js')

module.exports.add = function add(a, b){
    return validateAndAction(a, b, addModule.add);
};

module.exports.sub = function sub(a, b){
    return validateAndAction(a, b, subModule.sub);
};

module.exports.mult = function mult(a, b){
    return validateAndAction(a, b, multModule.mult);
};

module.exports.div = function div(a, b){
    if (b === 0)
        return dividedByZeroError();
    else
        return validateAndAction(a, b, divModule.div);
};

function validateAndAction(a, b, action) {
    if (validateNumber(a) && validateNumber(b))
        return action(a, b);
    else
        return showError();
}

function validateNumber(number){
    return !isNaN(number);
}

function dividedByZeroError(){
    return "can't divide by zero"
}

function showError(){
    return 'error'
}