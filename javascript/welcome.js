navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  alert('Microphone access granted to StandNote!');
  window.close();
});
