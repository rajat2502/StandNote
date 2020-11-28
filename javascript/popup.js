let chunks = [],
  recorder,
  stream,
  counter = 1;

const start = document.getElementById('start'),
  stop = document.getElementById('stop'),
  body = document.getElementsByTagName('body')[0];

function startRecord() {
  chunks = [];
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function (_stream) {
      stream = _stream;
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
        if (recorder.state == 'inactive') makeLink();
      };
    })
    .then(() => recorder.start())
    .catch(function (error) {});
}

function makeLink() {
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
}

function stopRecord() {
  stream.getTracks().forEach(function (track) {
    track.stop();
  });
}

start.addEventListener('click', startRecord);
stop.addEventListener('click', stopRecord);
