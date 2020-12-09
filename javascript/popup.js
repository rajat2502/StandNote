let email;

function disableButtons() {
  document.getElementById('submit').disabled = true;
  document.getElementById('google-btn').disabled = true;
}

function enableButtons() {
  document.getElementById('submit').disabled = false;
  document.getElementById('google-btn').disabled = false;
}

function login() {
  const email = document.getElementById('email').value,
    password = document.getElementById('password').value;

  disableButtons();

  fetch('https://standnote.herokuapp.com/rest-auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((data) => {
      chrome.storage.sync.set({ key: data.key });
      chrome.storage.sync.set({ email });
      enableButtons();
      showRecordScreen(email);
    })
    .catch((err) => {
      console.log(err);
      enableButtons();
    });
}

function googleLogin() {
  disableButtons();
  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    if (chrome.runtime.lastError) {
      alert(chrome.runtime.lastError.message);
      return;
    }
    fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`
    )
      .then((res) => res.json())
      .then((data) => {
        email = data.email;
        chrome.storage.sync.set({ email: data.email });
      });

    const body = JSON.stringify({ access_token: token });

    fetch('https://standnote.herokuapp.com/rest-auth/google/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        chrome.storage.sync.set({ key: data.key });
        enableButtons();
        showRecordScreen(email);
      })
      .catch((err) => {
        console.log(err);
        enableButtons();
      });
  });
}

function addRecordListener() {
  const startBtn = document.getElementById('start-record');

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (
      tabs[0].url.includes('chrome://') ||
      tabs[0].url.includes('chrome-extension://') ||
      tabs[0].url.includes('chrome.com') ||
      tabs[0].url.includes('chrome.google.com')
    ) {
      startBtn.setAttribute('disabled', true);
      startBtn.innerText = "Can't record a Chrome page!";
    }
  });

  startBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'record' });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'record' }, () => {
        window.close();
      });
    });
  });
}

function showRecordScreen(email) {
  document.getElementById('login').style.display = 'none';
  document.getElementById('content').style.display = 'block';
  document.getElementById('content-buttons').style.display = 'block';
  document.getElementById('emailID').innerText = email;
  addRecordListener();
}

function showLoginScreen() {
  document.getElementById('login').style.display = 'block';
  document.getElementById('content').style.display = 'none';
  document.getElementById('content-buttons').style.display = 'none';
}

function addLoginListeners() {
  document.getElementById('submit').addEventListener('click', login);
  document.getElementById('google-btn').addEventListener('click', googleLogin);
}

chrome.storage.sync.get('email', (data) => {
  if (!data.email) {
    document.getElementById('login').style.display = 'block';
    addLoginListeners();
  } else {
    showRecordScreen(data.email);
  }
});

document.getElementById('logOut').addEventListener('click', () => {
  chrome.storage.sync.clear(() => {
    showLoginScreen();
    addLoginListeners();
  });
});
