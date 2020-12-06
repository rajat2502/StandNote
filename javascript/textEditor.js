let meetingText = window.text;
const textarea = document.getElementById('meetingText');

document.getElementById('score').innerText = window.confidenceScore;
textarea.value = meetingText;

textarea.addEventListener('keyup', (e) => {
  meetingText = e.target.value;
});

sendText.addEventListener('click', () => {
  document.getElementsByClassName('content')[0].style.display = 'none';
  document.getElementsByClassName('message')[0].style.display = 'block';
});
