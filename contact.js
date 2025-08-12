// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
  const reasonSelect = document.getElementById("reason");
  const appointmentBox = document.getElementById("appointment-box");
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  // Handle showing appointment box if reason is Appointment
  reasonSelect.addEventListener("change", function () {
    if (reasonSelect.value === "appointment") {
      appointmentBox.style.display = "block";
    } else {
      appointmentBox.style.display = "none";
    }
  });

  // Handle form submission
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const reason = reasonSelect.value;
    const message = document.getElementById("message").value.trim();

    // If appointment selected, validate extra fields
    if (reason === "appointment") {
      const fullName = document.getElementById("fullname").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const appointmentReason = document.getElementById("appointment-reason").value.trim();

      if (!fullName || !phone || !appointmentReason || !message) {
        formMessage.textContent = "Please fill in all appointment details.";
        formMessage.style.color = "red";
        return;
      }
    } else {
      if (!message) {
        formMessage.textContent = "Please enter a message.";
        formMessage.style.color = "red";
        return;
      }
    }

    // Simulate routing (you can later connect this to backend or email service)
    const routingEmails = {
      prayer: "prayerband@goremworldwide.com",
      family: "ministerchukwudi@goremworldwide.com",
      welfare: "support@goremworldwide.com",
      appointment: "admin@goremworldwide.com", // You can change this
      hospitality: "glory.adeoti@goremworldwide.com"
    };

    const targetEmail = routingEmails[reason] || "admin@goremworldwide.com";

    formMessage.innerHTML = `<span style="color: green;">✅ Message will be sent to <strong>${targetEmail}</strong></span>`;
    
    // Reset form if needed
    // contactForm.reset();
    // appointmentBox.style.display = "none";
  });
});
