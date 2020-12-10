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

async function getSummarizedText() {
  const body = { email, text: meetingText, max_sentences: 2 };
  console.log(body);

  const res = await fetch('http://standnote.herokuapp.com/summarizer/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  console.log(data);

  return data;
}

document
  .getElementById('submit-meeting-details')
  .addEventListener('submit', async (e) => {
    try {
      e.preventDefault();

      document.getElementById('error').innerText = '';
      document.getElementById('sendText').disabled = true;

      const data = await getSummarizedText();

      title = document.getElementById('title').value;

      const body = {
        email,
        duration: meetingDuration,
        title,
        content: meetingText,
        markdown: data.summerised_text,
        score: window.confidenceScore,
      };

      const res = await fetch('http://standnote.herokuapp.com/notes/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error('Something went Wrong!');
      }

      const resData = await res.json();

      document.getElementsByClassName('content')[0].style.display = 'none';
      document.getElementsByClassName('message')[0].style.display = 'block';
      document.title = 'StandNote - Thanks for using StandNote';
    } catch (err) {
      console.log(err);
      document.getElementById('sendText').disabled = false;

      document.getElementById('error').innerText =
        'Error while uploading the data!';
    }
  });
