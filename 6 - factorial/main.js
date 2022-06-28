
console.log(factorial(3))
console.log(factorial(5))

let arrFirst = [8];
let arrSecond = [1, 8, 37, 5, 17];
let arrThird = [8, 17];

console.log(max(arrFirst), 'one element test, must return 8');
console.log(max(arrSecond), '5 elements test, must return 37');
console.log(max(arrThird), '2 elements test, must return 17');

console.log(maximum(arrFirst, arrFirst.length), 'one element test, must return 8');
console.log(maximum(arrSecond, arrSecond.length), '5 elements test, must return 37');
console.log(maximum(arrThird, arrThird.length), '2 elements test, must return 17');

function factorial(n) {
    if(n === 1){
        return 1;
    }

    return n * factorial(n - 1)
}

function max(arr) {
    let max = arr[0];
    for (let i = 1; i <= arr.length; i++ ){
        if(max <= arr[i]){
            max = arr[i]
        }else return max;
    }
}

function maximum(arr, n) {

    if (n === 1)
        return arr[0];

    return Math.max(arr[n - 1],
        maximum(arr, n - 1));
}