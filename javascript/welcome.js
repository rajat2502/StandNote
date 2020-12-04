navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  alert('Microphone access granted to StandNote. Happy meetings ;)');
  window.close();
});
