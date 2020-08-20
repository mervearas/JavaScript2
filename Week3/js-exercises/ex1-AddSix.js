'use strict'
function createBase(x) {
  return function(y) {
    return x + y;
  };
}

const addSix = createBase(6);

console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(27));
