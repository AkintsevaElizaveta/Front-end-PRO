'use strict'

function Hamburger(size){
    this.totalPrice = size.price;
    this.totalCalories = size.calories;
}

Hamburger.prototype.addTopping = function (topping){
    this.totalPrice += topping.price;
    this.totalCalories += topping.calories;
}

Hamburger.prototype.getPrice = function (){
    return this.totalPrice;
}

Hamburger.prototype.getCalories = function (){
    return this.totalCalories;
}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
}

Hamburger.SIZE_MEDIUM = {
    price: 75,
    calories: 30,
}

Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40,
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5,
}

Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10,
}

Hamburger.TOPPING_CHEESE = {
    price: 10,
    calories: 20,
}

Hamburger.TOPPING_SALAD = {
    price: 20,
    calories: 5,
}

Hamburger.TOPPING_FLAVOURING = {
    price: 15,
    calories: 0,
}

const hamburgerSmall = new Hamburger(Hamburger.SIZE_SMALL);
const hamburgerMedium = new Hamburger(Hamburger.SIZE_MEDIUM)

hamburgerSmall.addTopping(Hamburger.TOPPING_MAYO);
hamburgerSmall.addTopping(Hamburger.TOPPING_FLAVOURING);
hamburgerSmall.addTopping(Hamburger.TOPPING_POTATO);
hamburgerSmall.addTopping(Hamburger.TOPPING_POTATO);
hamburgerMedium.addTopping(Hamburger.TOPPING_SALAD);
hamburgerMedium.addTopping(Hamburger.TOPPING_FLAVOURING);
hamburgerMedium.addTopping(Hamburger.TOPPING_CHEESE);

console.log("Price with sauce: " + hamburgerSmall.getPrice());
console.log("Calories with sauce: " + hamburgerSmall.getCalories());
console.log("Price with sauce: " + hamburgerMedium.getPrice());
console.log("Calories with sauce: " + hamburgerMedium.getCalories());
