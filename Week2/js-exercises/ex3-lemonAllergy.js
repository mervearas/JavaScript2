'use strict'

function takeOutLemons(basket) {
  // your code goes in here. The output is a string 
  const newBasket = fruitBasket.filter(function(fruit){
    if(fruit !== 'Lemon'){
      return true;
    } else {
      return false;
    }
  })
  return `My mom bought me a fruit basket, containing ${newBasket}`
}

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

console.log(takeOutLemons(fruitBasket));