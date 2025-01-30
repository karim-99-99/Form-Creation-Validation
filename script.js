document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    let messages = [];

    const usernameInput = document.getElementById("username").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    if (usernameInput.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    if (!emailInput.includes("@") || !emailInput.includes(".")) {
      isValid = false;
      messages.push("please enter valid email");
    }

    if (passwordInput.length < 8) {
      isValid = false;
      messages.push("please enter valid password");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
