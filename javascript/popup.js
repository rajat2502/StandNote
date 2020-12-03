const startBtn = document.getElementById('start-record');

startBtn.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'record' }, () => {
      window.close();
    });
  });

  chrome.runtime.sendMessage({ type: 'record' });
});
