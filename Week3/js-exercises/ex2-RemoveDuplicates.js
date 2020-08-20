'use strict'

// WRITE YOUR FUNCTION HERE
function removeDuplicates(array) {
  for(let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if(i !== x && array[i] === array[x]) {
        array.splice(x,1);
      }
    }
  }
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);

if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!")