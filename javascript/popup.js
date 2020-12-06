const startBtn = document.getElementById('start-record');

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  if (
    tabs[0].url.includes('chrome://') ||
    tabs[0].url.includes('chrome-extension://') ||
    tabs[0].url.includes('chrome.com') ||
    tabs[0].url.includes('chrome.google.com')
  ) {
    startBtn.setAttribute('disabled', true);
    startBtn.innerText = "Can't record a Chrome page!";
  }
});

startBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'record' });

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'record' }, () => {
      window.close();
    });
  });
});
