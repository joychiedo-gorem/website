document.addEventListener("DOMContentLoaded", () => {
  const countdownBox = document.createElement("div");
  countdownBox.className = "countdown-box";
  document.querySelector(".events").prepend(countdownBox);

  // Define all event dates
  const sessions = [
    { label: "🔥 Thursday Morning", date: new Date("2025-08-21T09:00:00") },
    { label: "🔥 Saturday Evening", date: new Date("2025-08-23T17:00:00") },
    { label: "🔥 Sunday Morning", date: new Date("2025-08-24T07:00:00") },
  ];

  function getNextSession() {
    const now = new Date();
    return sessions.find(session => session.date > now);
  }

  function updateCountdown() {
    const next = getNextSession();

    if (!next) {
      countdownBox.innerHTML = `<strong>🔥 All sessions have ended. What a mighty visitation! 🙌🏾</strong>`;
      return;
    }

    const now = new Date();
    const diff = next.date - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownBox.innerHTML = `
      <div class="countdown-text">
        ⏳ <strong>${next.label} Session Countdown:</strong><br>
        ${days}d ${hours}h ${minutes}m ${seconds}s remaining!
      </div>
    `;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});




