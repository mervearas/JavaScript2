'use strict'
// find even numbers
const myNumbers = [1, 2, 3, 4];
const evenNumbers = myNumbers.filter(function(numbers) {
  if (numbers % 2 === 0){
   return numbers
  }
});

// multiply by 2
const result = evenNumbers.map(function(number){
  return number * 2;
})

console.log(evenNumbers);
console.log(result);