const audioCtx = new AudioContext();

let chunks = [],
  recorder,
  stream,
  counter = 1;

const start = document.getElementById('start'),
  stop = document.getElementById('stop'),
  body = document.getElementsByTagName('body')[0];

function getTab() {
  chrome.tabCapture.capture(
    {
      audio: true,
      // audioConstraints: {
      //   mandatory: {
      //     chromeMediaSource: 'tab',
      //   },
      // },
    },
    (_stream) => {
      const audio = new Audio();
      audio.srcObject = _stream;
      audio.play();
      stream = _stream;
      recorder = new MediaRecorder(stream);
      recorder.start();
      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
        if (recorder.state == 'inactive') download();
      };
    }
  );
}

function startRecord() {
  chunks = [];
  getTab();
}

function download() {
  let blob = new Blob(chunks, { type: 'audio' }),
    url = URL.createObjectURL(blob),
    p = document.createElement('p'),
    mt = document.createElement('audio'),
    hf = document.createElement('a');
  mt.controls = true;
  mt.src = url;
  hf.href = url;
  hf.download = `${counter++}.wav`;
  hf.innerHTML = `donwload ${hf.download}`;
  p.appendChild(mt);
  p.appendChild(hf);
  body.appendChild(p);
  // hf.click();
}

function stopRecord() {
  stream.getTracks().forEach(function (track) {
    track.stop();
  });
}

start.addEventListener('click', startRecord);
stop.addEventListener('click', stopRecord);
