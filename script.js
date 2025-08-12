// Countdown Timer for Flood Gate of Glory – Aug 31, 2025 at 10:00 AM
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const eventDate = new Date("August 31, 2025 10:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "🔥 The Flood Gate of Glory has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    <strong>⏳ Countdown:</strong> ${days}d ${hours}h ${minutes}m ${seconds}s
  `;
}

setInterval(updateCountdown, 1000);
