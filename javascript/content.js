let paused = false,
  muted = false,
  isRunning,
  timerTime = 0,
  interval;

const body = document.getElementsByTagName('body')[0];
const div = document.createElement('div');
const countdown = document.createElement('div');

countdown.setAttribute('class', 'standnote-countdown');
countdown.innerHTML = `
  <div class="standnote-countdown">
    <span id="standnote-count">3</span>
  </div>
`;

div.setAttribute('class', 'standnote');
div.innerHTML = `
  <div class="standnote-timer">
    <span>
      <span id="minutes">00</span> : <span id="seconds">00</span>
    </span>
    <span id="standnote-cancel" title="Cancel">&#10005;</span>
  </div>
  <span class="standnote-span"></span>
  <div class="standnote-action-buttons">
    <img id="stopBtn" title="Generate MoM" src=${chrome.extension.getURL(
      './assets/done.png'
    )} />
    <img id="pauseBtn" title="Pause" src=${chrome.extension.getURL(
      './assets/paused.png'
    )} />
    <img id="muteBtn" title="Mute microphone" src=${chrome.extension.getURL(
      './assets/mic-play.png'
    )} />
  </div>
`;

// set variables and html to their default values
function setToDefaultAndInject() {
  paused = false;
  muted = false;
  timerTime = 0;

  body.appendChild(div);

  document.getElementById('pauseBtn').title = 'Pause';
  document.getElementById('pauseBtn').src = chrome.extension.getURL(
    './assets/paused.png'
  );

  document.getElementById('muteBtn').title = 'Mute microphone';
  document.getElementById('muteBtn').src = chrome.extension.getURL(
    './assets/mic-play.png'
  );

  document.getElementById('minutes').innerText = '00';
  document.getElementById('seconds').innerText = '00';
}

// stop timer and generate the minutes of the meeting.
function generateMoM() {
  chrome.runtime.sendMessage({ type: 'stop' });

  stopTimer();
  div.remove();
}

// pause the recorder
function pause() {
  chrome.runtime.sendMessage({ type: 'pause' });
  const pauseBtn = document.getElementById('pauseBtn');

  if (!paused) {
    stopTimer();
    pauseBtn.title = 'Play';
    pauseBtn.src = chrome.extension.getURL('./assets/play.png');
    paused = true;
  } else {
    startTimer();
    pauseBtn.title = 'Pause';
    pauseBtn.src = chrome.extension.getURL('./assets/paused.png');
    paused = false;
  }
}

// mute microphone
function muteMic() {
  chrome.runtime.sendMessage({ type: 'mute' });
  const muteBtn = document.getElementById('muteBtn');

  if (!muted) {
    muteBtn.title = 'Unmute Microphone';
    muteBtn.src = chrome.extension.getURL('./assets/mic-paused.png');
    muted = true;
  } else {
    muteBtn.title = 'Mute microphone';
    muteBtn.src = chrome.extension.getURL('./assets/mic-play.png');
    muted = false;
  }
}

// stop timer
const stopTimer = () => {
  isRunning = false;
  clearInterval(interval);
};

// prepend 0 before number if < 10
const pad = (number) => {
  return number < 10 ? '0' + number : number;
};

// inc timer by 1
const incrementTimer = () => {
  timerTime++;

  const numberMinutes = Math.floor(timerTime / 60);
  const numberSeconds = timerTime % 60;

  document.getElementById('minutes').innerText = pad(numberMinutes);
  document.getElementById('seconds').innerText = pad(numberSeconds);
};

// start timer
function startTimer() {
  isRunning = true;
  interval = setInterval(incrementTimer, 1000);
}

// inject html and start the timer
function injectHtml() {
  setToDefaultAndInject();
  startTimer();

  document.getElementById('stopBtn').addEventListener('click', generateMoM);
  document.getElementById('pauseBtn').addEventListener('click', pause);
  document.getElementById('muteBtn').addEventListener('click', muteMic);
}

// show countdown for three seconds
function countDownAndInject() {
  let count = 3;

  body.appendChild(countdown);
  document.getElementById('standnote-count').innerText = '3';

  const countInterval = setInterval(() => {
    count--;
    document.getElementById('standnote-count').innerText = count;
  }, 1000);

  setTimeout(() => {
    countdown.remove();
    clearInterval(countInterval);
    injectHtml();
  }, 3000);
}

// To Do
function cancel() {}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'record':
      countDownAndInject();
      break;
    case 'data':
      console.log(request.data);
      break;
    default:
      break;
  }

  sendResponse();
  return true;
});
