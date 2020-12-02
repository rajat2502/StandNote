const audioContext = new AudioContext();
const destination = audioContext.createMediaStreamDestination();
const body = document.getElementsByTagName('body')[0];

let chunks = [],
  recorder,
  tabStream,
  micStream,
  tabAudio,
  micAudio,
  output,
  audioConfig,
  recognizer,
  text = '',
  micable = true;

const constraints = {
  audio: true,
};

const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
  'd8ea273597624018be55d5f5dee557ab',
  'eastus'
);

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
        chrome.tabs.sendMessage(tabs[0].id, { type: 'data', data: text });
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

    // get tab audio
    getTabAudio();
  });
}

// start recording the stream
function startRecord() {
  getMicAudio();
}

function download() {
  let blob = new Blob(chunks, { type: 'audio' }),
    url = URL.createObjectURL(blob),
    audio = document.createElement('audio'),
    a = document.createElement('a');
  audio.controls = true;
  audio.src = url;
  a.href = url;
  a.download = `audio.mp3`;
  a.innerHTML = `download ${a.download}`;
  a.appendChild(audio);
  body.appendChild(a);
  a.click();
  delete a;
}

function pauseResumeRecord() {
  if (recorder.state == 'recording') {
    recorder.pause();
  } else {
    recorder.resume();
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
  output.getTracks().forEach((t) => t.stop());

  recognizer.stopContinuousRecognitionAsync();

  micable = true;
  chunks = [];
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
