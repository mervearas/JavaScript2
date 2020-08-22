'use strict'

function dayWorth(tasks, hourlyRate) {
  // put your code in here, the function does returns a euro formatted string
  let earnedAmount = 0;

  tasks.forEach(function(task){
    const totalPrice = (task.duration / 60) * hourlyRate;
    earnedAmount = earnedAmount + totalPrice;
  });

  return "\u20AC" + earnedAmount.toFixed(2);
}




const mondayTasks = [{
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

console.log(dayWorth(mondayTasks, 25))
console.log(dayWorth(mondayTasks, 13.37))