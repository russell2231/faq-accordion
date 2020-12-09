const toggles = document.querySelectorAll('.faq');

for(let toggle of toggles) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  })
}