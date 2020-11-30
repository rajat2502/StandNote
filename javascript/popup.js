const audioContext = new AudioContext();
const destination = audioContext.createMediaStreamDestination();

let chunks = [],
  recorder,
  tabStream,
  micStream,
  tabAudio,
  micAudio,
  output;

const constraints = {
  audio: true,
};

const start = document.getElementById('start'),
  stop = document.getElementById('stop'),
  body = document.getElementsByTagName('body')[0];

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

// start record
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
}

// stop record
function stopRecord() {
  // stop all the tracks
  output.getTracks().forEach((track) => track.stop());
}

start.addEventListener('click', startRecord);
stop.addEventListener('click', stopRecord);
