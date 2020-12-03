let paused = false,
  muted = false;

const body = document.getElementsByTagName('body')[0];
const stopBtn = document.createElement('img'),
  pauseBtn = document.createElement('img'),
  muteBtn = document.createElement('img');

const div = document.createElement('div');

div.setAttribute('class', 'standnote-buttons');
div.appendChild(stopBtn);
div.appendChild(pauseBtn);
div.appendChild(muteBtn);

stopBtn.src = chrome.extension.getURL('./assets/done.png');
stopBtn.title = 'Generate MoM';

pauseBtn.src = chrome.extension.getURL('./assets/paused.png');
pauseBtn.title = 'Pause';

muteBtn.src = chrome.extension.getURL('./assets/mic-play.png');
muteBtn.title = 'Mute microphone';

function injectHtml() {
  body.appendChild(div);
}

function deleteHtml() {
  div.remove();
}

stopBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'stop' });
  deleteHtml();
});

pauseBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'pause' });

  if (!paused) {
    pauseBtn.title = 'Play';
    pauseBtn.src = chrome.extension.getURL('./assets/play.png');
    paused = true;
  } else {
    pauseBtn.title = 'Pause';
    pauseBtn.src = chrome.extension.getURL('./assets/paused.png');
    paused = false;
  }
});

muteBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'mute' });

  if (!muted) {
    muteBtn.title = 'Unmute Microphone';
    muteBtn.src = chrome.extension.getURL('./assets/mic-paused.png');
    muted = true;
  } else {
    muteBtn.title = 'Mute microphone';
    muteBtn.src = chrome.extension.getURL('./assets/mic-play.png');
    muted = false;
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'record':
      injectHtml();
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
