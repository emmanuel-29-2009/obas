// Example interactivity
document.querySelector('.login').onclick = () => {
  alert('Login clicked!');
};

document.querySelector('.signup').onclick = () => {
  alert('Register clicked!');
};

// script.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".login").onclick = () => window.location.href = "login.html";
  document.querySelector(".signup").onclick = () => window.location.href = "register.html";

  document.querySelectorAll(".action-btn").forEach((btn) => {
    btn.onclick = () => alert(`You clicked: ${btn.innerText}`);
  });
});