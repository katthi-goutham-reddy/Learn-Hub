document.addEventListener("DOMContentLoaded", function () {
  const selectedCourseInfo = document.getElementById("selectedCourseInfo");
  const queryParams = new URLSearchParams(window.location.search);
  const selectedCourse = queryParams.get("course");

  if (selectedCourseInfo && selectedCourse) {
    const courseLabel = selectedCourse
      .split("-")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    selectedCourseInfo.textContent = "You are enrolling for: " + courseLabel;
    selectedCourseInfo.classList.add("success");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const message = document.getElementById("formMessage");

    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      message.textContent = "";
      message.className = "form-message";

      if (!name || !email || !password || !confirmPassword) {
        message.textContent = "All fields are required.";
        message.classList.add("error");
        return;
      }

      if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.classList.add("error");
        return;
      }

      if (password !== confirmPassword) {
        message.textContent = "Password and Confirm Password must match.";
        message.classList.add("error");
        return;
      }

      message.textContent = "Registration successful.";
      message.classList.add("success");
      registerForm.reset();
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    const loginEmailInput = document.getElementById("loginEmail");
    const loginPasswordInput = document.getElementById("loginPassword");
    const loginMessage = document.getElementById("loginFormMessage");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const loginEmail = loginEmailInput.value.trim();
      const loginPassword = loginPasswordInput.value.trim();

      loginMessage.textContent = "";
      loginMessage.className = "form-message";

      if (!loginEmail || !loginPassword) {
        loginMessage.textContent = "Email and password are required.";
        loginMessage.classList.add("error");
        return;
      }

      if (!emailPattern.test(loginEmail)) {
        loginMessage.textContent = "Please enter a valid email address.";
        loginMessage.classList.add("error");
        return;
      }

      loginMessage.textContent = "Login successful.";
      loginMessage.classList.add("success");
      loginForm.reset();
    });
  }
});
