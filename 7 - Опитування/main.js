'use strict'
let points = [];
let res = getAnswers();
alert(`Ваш результат - ${res}`);

function getAnswers(){
    askQuestion('Сколько будет 2+2?','4' )
    askQuestion('Солнце встает на востоке?','да' )
    askQuestion('Сколько будет 5 / 0?', 'Infinity')
    askQuestion('Какого цвета небо?', 'голубого')
    askQuestion('Какой правильный ответ на «Главный вопрос жизни, вселенной и всего такого»','42');
    arrSum(points)
    return (arrSum(points))
}
function askQuestion(message, answer){
    let a = prompt(message);
    if (validateAnswer(a, answer)){
        points.push(10)
    }else{
        points.push(0)
    }
}

function validateAnswer(usersAnswer, rightAnswer){
    if (usersAnswer === undefined || usersAnswer === null || usersAnswer === ''){
        return false;
    }else if (usersAnswer !== rightAnswer){
        return false
    }
    return true;
}

function arrSum(arr){
    return arr.reduce((a, b) => a + b);
}