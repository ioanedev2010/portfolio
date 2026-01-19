// Contact form submit
document.querySelector(".contact-form")
  .addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully!");
  });
  const toggle = document.getElementById('mode-toggle');
  const body = document.body;
  
  toggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    // Icon change
    if(body.classList.contains('light-mode')){
      toggle.textContent = '🌞';
    } else {
      toggle.textContent = '🌙';
    }
  });
  