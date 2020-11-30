var constraints = {
  audio: true,
};

// Get audio access
function getSources(request) {
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    alert('Microphone access granted to StandNote!');
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type == 'get-mic-access') {
    getSources(request);
  }
});

chrome.runtime.sendMessage({ type: 'sources-loaded' });
