'use strict';
let menu =[]
//Constructor
function Food(foodName ,type , price){
    this.foodName = foodName;
    this.type = type;
    this.price = price;
   menu.push(this);  
};

function genrateRandom() {
    return Math.floor(Math.random() * (1000-5) + 1);
};

//Render 
Food.prototype.render = function () {
    let foodTable = document.getElementById('food');

    let foodRow = document.createElement("tr");

    let foodID  = document.createElement('td')
    foodId.textContent = genrateRandomID();
    foodRow.appendChild(foodId);

    let foodName  = document.createElement('td')
    foodName.textContent = this.foodName;
    food.appendChild(foodName);

    let foodType = document.createElement('td')
    foodType.textContent = this.type;
    foodRow.appendChild("foodType");

    let foodPrice = document.createElement('td');
   foodPrice.textContent=this.price+"$";
    foodRow.appendChild(foodPrice);

    foodTable.appendChild(foodRow);
};

function handler(e){
    e.preventDefault();
    let foodName = e.target.foodName.value;
    let type = e.target.type.value;
    let price = e.target.price.value;
    console.log(foodName,type,price);

    let food = new food(foodName, type , price);
    console.log(food);
    food.render();
}

let saveValues = document.getElementById("foodForm");
saveValues.addEventListener("submit",handler);