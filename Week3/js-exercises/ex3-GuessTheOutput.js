
/** 
  x is assigned to a local function scope. 10 is assigned to variable "a" in the global scope.
  This outer function sets the variable a as 12. And then it returns with an inner function which has access to the outer function.
  So the value of the "a" is going to be 12. And it will display the number in the browser in alert box if we use this js file in the html.
*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();