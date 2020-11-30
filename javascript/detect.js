const iframe = document.createElement('iframe');
iframe.style.display = 'none';
iframe.src = chrome.extension.getURL('../html/audiosources.html');
iframe.allow = 'microphone';
document.body.appendChild(iframe);
