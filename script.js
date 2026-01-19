// Contact form
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});

// Theme toggle
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
  toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});
