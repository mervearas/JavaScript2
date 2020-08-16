let status = "stop";

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const resumeButton = document.getElementById("resume");
const countUpButton = document.getElementById("countUp");
const countDownButton = document.getElementById("countDown");

countUpButton.addEventListener("click", increaseOne);
countDownButton.addEventListener("click", decreaseOne);
playButton.addEventListener("click", startSession);
pauseButton.addEventListener("click", pauseSession);
stopButton.addEventListener("click", stopSession);
resumeButton.addEventListener("click", resumeSession);

function increaseOne(){
  if(status !== "started") {
    let minute = document.getElementById("minute");
    minute.innerText = parseInt(minute.innerText) + 1;
    setTimer(minute.innerText, "0");
  }
}

function decreaseOne(){
  if(status !== "started") {
    let minute = document.getElementById("minute");
    if(parseInt(minute.innerText) !== 0){
      minute.innerText = parseInt(minute.innerText) - 1;
      setTimer(minute.innerText, "0");
    }
  }
}

// set session length
function setTimer(minute, second){
  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

  if(parseInt(minute) > 0 || parseInt(second) > 0) {
    const timer = document.getElementById("timer");
    timer.innerText = minute + ":" + second;
  } else {
    const timer = document.getElementById("timer");
    timer.innerText = "Time's up!";
  }
}

let taskInterval;

function startSession(){
  let sessionTime = document.getElementById("timer").innerText;

  if( parseInt(sessionTime) > 0 && status !== "started") {
    playButton.style = "display:none";
    stopButton.style = "display:static";

    let sessionTimeSplited = sessionTime.split(":");
    let duration = (parseInt(sessionTimeSplited[0]) * 60) + parseInt(sessionTimeSplited[1]);
    
    taskInterval = setInterval(function(){
      let minute = Math.floor(duration / 60);
      let second = duration % 60;

      setTimer(minute, second);
      duration = duration - 1;
      status="started";
    }, 1000);
  }
}

function pauseSession(){
  if(status === "started") {
    clearInterval(taskInterval);
    status = "paused";
    pauseButton.style = "display:none";
    resumeButton.style = "display:static";
  }
}

function resumeSession(){
  if(status === "paused") {
    startSession();
    pauseButton.style = "display:static";
    resumeButton.style = "display:none";
  }
}

function stopSession(){
  let minute = document.getElementById("minute").innerText;
  clearInterval(taskInterval);
  setTimer(minute, "0");
  playButton.style = "display:static";
  stopButton.style = "display:none";
  status = "stop";
}

window.onload = function() {
  stopButton.style = "display:none";
  resumeButton.style = "display:none";
}