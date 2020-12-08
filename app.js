const toggles = document.querySelectorAll('.toggle-button');

for(let toggle of toggles) {
  toggle.addEventListener('click', () => {
    toggle.parentElement.classList.toggle('active');
  })
}