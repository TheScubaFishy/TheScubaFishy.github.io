// Timer Display Objects
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
// Input Objects
const time = document.getElementById("time");
const section = document.getElementById("section");
const interval = document.getElementById("interval");
// Timer Variables
let startTime;
let timeLeft;
let elapsedTime = 0;
let timerInterval;
let timerVal = true;
// Time Format Function
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((ms % 1000) / 10); // Displaying centiseconds

  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    "." +
    String(milliseconds).padStart(2, "0")
  );
}
function startTimer() {
  if (!timeLeft) {
    timeLeft = time.value * 60000; // Convert minutes to milliseconds
  }

  time.disabled = true;
  section.disabled = true;
  interval.disabled = true;

  if (timerVal === true) {
    timerVal = false;
    startBtn.innerHTML = "Pause";
    startTime = Date.now() - elapsedTime;

    const intervalVal = parseFloat(interval.value);
    const sectionVal = parseInt(section.value, 10);

    const hasInterval = !isNaN(intervalVal) && intervalVal > 0;
    const hasSection = !isNaN(sectionVal) && sectionVal > 0;

    if (!hasInterval && !hasSection) {
      console.log("Put something in for the values!");
      return;
    }

    let repeatCount = 0;
    let maxRepeats = 0;
    let segmentDuration = 0;
    let remainderTime = 0;

    // CASE 1: Only interval is provided
    if (hasInterval) {
      segmentDuration = intervalVal * 60000;
      maxRepeats = Math.floor(timeLeft / segmentDuration);
      remainderTime = timeLeft - maxRepeats * segmentDuration;
    }

    // CASE 2: Only section is provided
    else if (hasSection) {
      segmentDuration = timeLeft / sectionVal;
      maxRepeats = sectionVal;
      remainderTime = 0;
    }

    function runOneTimer(duration, callback) {
      let start = Date.now();
      timerInterval = setInterval(function () {
        elapsedTime = Date.now() - start;
        let remaining = duration - elapsedTime;

        if (remaining <= 0) {
          clearInterval(timerInterval);
          display.textContent = formatTime(0);
          navigator.vibrate(500);
          if (callback) callback();
        } else {
          display.textContent = formatTime(remaining);
        }
      }, 10);
    }

    function runTimerSequence() {
      if (repeatCount < maxRepeats) {
        console.log(`Running segment ${repeatCount + 1} of ${maxRepeats}`);
        runOneTimer(segmentDuration, () => {
          repeatCount++;
          runTimerSequence();
        });
      } else if (remainderTime > 0) {
        console.log("Running remainder time:", remainderTime);
        runOneTimer(remainderTime, finishTimer);
        remainderTime = 0; // prevent double-run
      } else {
        finishTimer();
      }
    }

    function finishTimer() {
      navigator.vibrate([200, 100, 200, 100, 200]);
      console.log("All segments complete.");
      startBtn.innerHTML = "Start";
      timerVal = true;
    }

    runTimerSequence(); // ✅ Start the timers
  }
}

function resetTimer() {
  timeLeft = undefined;
  timerVal = true;
  startBtn.innerHTML = "Start";
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
  time.disabled = false;
  checkTextBoxes();
}

// Initial display
display.textContent = formatTime(elapsedTime);

function checkTextBoxes() {
  if (section.value.length > 0) {
    interval.disabled = true; // or interval.readOnly = true;
  } else {
    interval.disabled = false; // or interval.readOnly = false;
  }

  if (interval.value.length > 0) {
    section.disabled = true; // or section.readOnly = true;
  } else {
    section.disabled = false; // or section.readOnly = false;
  }
}
