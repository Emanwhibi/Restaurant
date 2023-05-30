'use strict';
let menu =[]
//Constructor
function Food(foodName ,type , price){
    this.foodName = foodName;
    this.type = type;
    this.price = price;
   menu.push(this)  
};

function genrateRandom(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
};
Food.prototype.calculateprice =function(min , max) {
    this.price = genrateRandom(min , max);
    console.log(this.price);
};

