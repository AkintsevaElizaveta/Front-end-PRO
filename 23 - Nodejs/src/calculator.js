console.log(module)

const addModule = require('./add.js');
const subModule = require('./sub.js')
const multModule = require('./mult.js')
const divModule = require('./div.js')

module.exports.add = function add(a, b){
    if (validateNumber(a) && validateNumber(b))
        return addModule.add(a, b);
    else
        return showError();
};

module.exports.sub = function sub(a, b){
    if (validateNumber(a) && validateNumber(b))
        return subModule.sub(a, b)
    else
        return showError();
};

module.exports.mult = function mult(a, b){
    if (validateNumber(a) && validateNumber(b))
        return multModule.mult(a, b)
    else
        return showError();
};

module.exports.div =function div(a, b){
    if (validateNumber(a) && validateNumber(b) && b !== 0)
        return divModule.div(a, b)
    else
        return showError();
};

function validateNumber(number){
    return !isNaN(number);
}

function showError(){
    return 'error'
}