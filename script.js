if (!localStorage.getItem('setupDone')) {
  window.location.href = 'setup.html';
}

let clickCount = 0;
let clickTimeout = null;

document.body.addEventListener('click', function(e) {
  // Apasă pe fundal (nu pe elemente interactive)
  if (e.target === document.body) {
    clickCount++;
    if (clickTimeout) clearTimeout(clickTimeout);
    clickTimeout = setTimeout(() => clickCount = 0, 1000);
    if (clickCount >= 4) {
      window.location.href = 'lockscreen.html';
    }
  }
});

function openApp(url) {
  window.location.href = url;
}

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  const elems = document.querySelectorAll('#time, .time');
  elems.forEach(el => el.innerText = time);
}
setInterval(updateClock, 1000);
updateClock();
