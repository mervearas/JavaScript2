'use strict'

function collectiveAge(people) {
  // return the sum of age for all the people
  let totalAge= 0;
  people.map(function(person){
   totalAge = totalAge + person.age;
  })
  return totalAge;
}

const hackYourFutureMembers = [{
    name: 'Wouter',
    age: 33
  },
  {
    name: 'Federico',
    age: 32
  },
  {
    name: 'Noer',
    age: 27
  },
  {
    name: 'Tjebbe',
    age: 22
  },
];

console.log("The collective age of the HYF team is: " + collectiveAge(hackYourFutureMembers));