let meetingText = window.text,
  title;
const email = window.email;
const meetingDuration = window.duration;

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

    document.getElementById('sendText').disabled = true;

    title = document.getElementById('title').value;

    const body = {
      email,
      duration: meetingDuration,
      title,
      content: meetingText,
      markdown: '',
      score: window.confidenceScore,
    };

    console.log(body);

    fetch('http://standnote.herokuapp.com/notes/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(() => {
        document.getElementsByClassName('content')[0].style.display = 'none';
        document.getElementsByClassName('message')[0].style.display = 'block';
        document.title = 'StandNote - Thanks for using StandNote';
      })
      .catch((err) => {
        document.getElementById('sendText').disabled = false;
      });
  });
