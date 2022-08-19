console.log(module)

const addModule = require('./add.js');
const subModule = require('./sub.js')
const multModule = require('./mult.js')
const divModule = require('./div.js')

module.exports.add = function add(a, b){
    if (validateNumber(a) && validateNumber(b))
        return addModule.add(a, b);

};

module.exports.sub = function sub(a, b){
    if (validateNumber(a) && validateNumber(b))
        return subModule.sub(a, b)
};

module.exports.mult = function mult(a, b){
    if (validateNumber(a) && validateNumber(b))
        return multModule.mult(a, b)
};

module.exports.div =function div(a, b){
    if (validateNumber(a) && validateNumber(b))
        return divModule.div(a, b)
};

function validateNumber(number){
    return !isNaN(number);
}