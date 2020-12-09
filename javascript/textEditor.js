let meetingText = window.text,
  title;
const email = window.email;
const duration = window.duration;

document.getElementById('duration').innerText = duration;

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

document
  .getElementById('submit-meeting-details')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const body = {
      email,
      duration,
      title,
      text: meetingText,
    };

    fetch('https://standnote.herokuapp.com/summarizer/', {
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(() => {
        document.getElementsByClassName('content')[0].style.display = 'none';
        document.getElementsByClassName('message')[0].style.display = 'block';
        document.title = 'StandNote - Thanks for using StandNote';
      });
  });
