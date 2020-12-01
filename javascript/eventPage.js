const audioContext = new AudioContext();
const destination = audioContext.createMediaStreamDestination();

let chunks = [],
  recorder,
  tabStream,
  micStream,
  tabAudio,
  micAudio,
  output,
  micable = true;

const constraints = {
  audio: true,
};

const body = document.getElementsByTagName('body')[0];

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

    recorder = new MediaRecorder(output);

    recorder.start();

    recorder.ondataavailable = (e) => {
      chunks.push(e.data);
      // call download when recorder state is inactive
      if (recorder.state == 'inactive') download();
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
  output.getTracks().forEach((track) => track.stop());
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
