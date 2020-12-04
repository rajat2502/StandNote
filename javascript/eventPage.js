const audioContext = new AudioContext();
const destination = audioContext.createMediaStreamDestination();

let tabStream,
  micStream,
  tabAudio,
  micAudio,
  output,
  audioConfig,
  recognizer,
  text = '',
  micable = true,
  paused = false;

const constraints = {
  audio: true,
};

// azure speech configurations
const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
  'd8ea273597624018be55d5f5dee557ab',
  'eastus'
);
speechConfig.speechRecognitionLanguage = 'en-IN';

// get tab audio
function getTabAudio() {
  chrome.tabCapture.capture(constraints, (_stream) => {
    // keep playing the audio in the background
    const audio = new Audio();
    audio.srcObject = _stream;
    audio.play();

    tabStream = _stream;
    tabAudio = audioContext.createMediaStreamSource(tabStream);
    tabAudio.connect(destination);

    output = new MediaStream();
    output.addTrack(destination.stream.getAudioTracks()[0]);

    audioConfig = SpeechSDK.AudioConfig.fromStreamInput(output);
    recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

    console.log(recognizer);

    recognizer.startContinuousRecognitionAsync();

    recognizer.recognizing = (s, e) =>
      console.log(`RECOGNIZING: Text=${e.result.text}`);

    recognizer.recognized = (s, e) => {
      text += e.result.text;
      console.log(text);
    };

    recognizer.canceled = (s, e) => {
      console.log(`CANCELED: Reason=${e.reason}`);
      recognizer.stopContinuousRecognitionAsync();
    };

    recognizer.sessionStopped = (s, e) => {
      console.log('\n Session stopped event.');
      recognizer.stopContinuousRecognitionAsync();

      // send text to content sciprt or make request to the backend
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { type: 'data', data: text },
          () => {
            // reload the background script to reset the variables
            chrome.extension.getBackgroundPage().window.location.reload();
          }
        );
      });
    };
  });
}

// get mic audio
function getMicAudio() {
  navigator.mediaDevices.getUserMedia(constraints).then((mic) => {
    micStream = mic;
    micAudio = audioContext.createMediaStreamSource(micStream);
    micAudio.connect(destination);

    getTabAudio();
  });
}

// start recording the stream
function startRecord() {
  setTimeout(() => getMicAudio(), 3000);
}

function pauseResumeRecord() {
  if (!paused) {
    tabAudio.disconnect(destination);
    if (micable) {
      micAudio.disconnect(destination);
    }
    paused = true;
  } else {
    tabAudio.connect(destination);
    if (micable) {
      micAudio.connect(destination);
    }
    paused = false;
  }
}

function muteMic() {
  if (micable) {
    micAudio.disconnect(destination);
    micable = false;
  } else {
    micAudio.connect(destination);
    micable = true;
  }
}

// stop record -> stop all the tracks
function stopRecord() {
  micStream.getTracks().forEach((t) => t.stop());
  tabStream.getTracks().forEach((t) => t.stop());

  recognizer.stopContinuousRecognitionAsync();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'record':
      startRecord();
      break;
    case 'stop':
      stopRecord();
      break;
    case 'pause':
      pauseResumeRecord();
      break;
    case 'mute':
      muteMic();
      break;
    default:
      break;
  }
});
