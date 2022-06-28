'use strict'

function createCalculator(base){
    function set(num){
        if (isNaN(num)){
            return;
        }

        base = num;
    }
    function add(num){
        if (isNaN(num)){
            return;
        }

        base += num
    }
    function sub(num){
        if (isNaN(num)){
            return;
        }

        base -= num;
    }
    function get(){
        return base;
    }
    return{
        set,
        add,
        sub,
        get,
    }
}

const calculator = createCalculator(100);

calculator.add(10); // 110 - это текущее значение base
calculator.add(10); // 120
calculator.sub(20); // 100

calculator.set(20); // 20
calculator.add(10); // 30
calculator.add(10); // 40
calculator.add('qwe'); // NaN и значение 40 не менять
alert(calculator.get())