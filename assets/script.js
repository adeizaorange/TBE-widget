const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();