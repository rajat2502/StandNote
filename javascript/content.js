const body = document.getElementsByTagName('body')[0];
const stopBtn = document.createElement('button'),
  pauseBtn = document.createElement('button'),
  muteBtn = document.createElement('button');

const div = document.createElement('div');

div.setAttribute('class', 'standnote-buttons');
div.appendChild(stopBtn);
div.appendChild(pauseBtn);
div.appendChild(muteBtn);

stopBtn.innerText = 'Stop Record';
pauseBtn.innerText = 'Pause Record';
muteBtn.innerText = 'Mute Record';

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
});
muteBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'mute' });
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
