let meetingText = window.text;
const textarea = document.getElementById('meetingText');

document.getElementById('score').innerText = window.confidenceScore;
textarea.value = meetingText;

textarea.addEventListener('keyup', (e) => {
  meetingText = e.target.value;
});
