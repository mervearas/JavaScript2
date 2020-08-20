/**

Variable x is assigned 9 in the global scope. Function f1 gets the val and adds one to val and reassings the val.
But this action does not reaassign the variable x. So the result is going to be 9.
The second function f2 accepts object as val and adds 1 to the x property and reassigns x.
This action is going to update the object property(y.x) and the result is going to be 10

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);