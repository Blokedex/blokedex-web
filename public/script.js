const target = new Date(2026, 8, 11, 0, 0, 0);
const countdown = document.querySelector("#countdown");
const intro = document.querySelector("#intro");
const finished = document.querySelector("#finished");
const units = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds")
};

function updateCountdown() {
  const remaining = target - Date.now();

  if (remaining <= 0) {
    countdown.hidden = true;
    intro.hidden = true;
    finished.hidden = false;
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  units.days.textContent = String(days).padStart(2, "0");
  units.hours.textContent = String(hours).padStart(2, "0");
  units.minutes.textContent = String(minutes).padStart(2, "0");
  units.seconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
