let paused = false,
  muted = false;

const body = document.getElementsByTagName('body')[0];
const div = document.createElement('div');

div.setAttribute('class', 'standnote-buttons');
div.innerHTML = `
  <div>
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

function setToDefault() {
  paused = false;
  muted = false;

  body.appendChild(div);

  document.getElementById('pauseBtn').title = 'Pause';
  document.getElementById('pauseBtn').src = chrome.extension.getURL(
    './assets/paused.png'
  );
  paused = false;

  document.getElementById('muteBtn').title = 'Mute microphone';
  document.getElementById('muteBtn').src = chrome.extension.getURL(
    './assets/mic-play.png'
  );
  muted = false;
}

function generateMoM() {
  chrome.runtime.sendMessage({ type: 'stop' });
  div.remove();
}

function pause() {
  chrome.runtime.sendMessage({ type: 'pause' });
  const pauseBtn = document.getElementById('pauseBtn');

  if (!paused) {
    pauseBtn.title = 'Play';
    pauseBtn.src = chrome.extension.getURL('./assets/play.png');
    paused = true;
  } else {
    pauseBtn.title = 'Pause';
    pauseBtn.src = chrome.extension.getURL('./assets/paused.png');
    paused = false;
  }
}

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

function injectHtml() {
  setToDefault();

  document.getElementById('stopBtn').addEventListener('click', generateMoM);
  document.getElementById('pauseBtn').addEventListener('click', pause);
  document.getElementById('muteBtn').addEventListener('click', muteMic);
}

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
