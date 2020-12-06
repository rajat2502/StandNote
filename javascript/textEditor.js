let meetingText = window.text;
const textarea = document.getElementById('meetingText');
const score = document.getElementById('score');

score.innerText = window.confidenceScore;

if (window.confidenceScore > 50) {
  score.setAttribute('class', 'good');
} else {
  score.setAttribute('class', 'bad');
}

textarea.value = meetingText;

textarea.addEventListener('keyup', (e) => {
  meetingText = e.target.value;
});

sendText.addEventListener('click', () => {
  document.getElementsByClassName('content')[0].style.display = 'none';
  document.getElementsByClassName('message')[0].style.display = 'block';
  document.title = 'StandNote - Thanks for using StandNote';
});
