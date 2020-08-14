'use strict'

function createHTMLList(arr) {
  // your code goes in here
  const ul = document.createElement("ul");

  arr.map(function(hobby){
    const li = document.createElement("li");
    li.innerText = hobby;
    ul.appendChild(li);
  })

  document.body.appendChild(ul);
}


const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

createHTMLList(myHobbies);