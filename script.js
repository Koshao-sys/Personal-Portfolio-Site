const toggleNav = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const closeMenu = document.querySelector('.close-menu');
const closeLinks = document.querySelectorAll('.nav a');

toggleNav.addEventListener('click', () => {
  nav.classList.toggle('open');
  closeMenu.style.display = nav.classList.contains('open') ? 'block' : 'none';
  toggleNav.style.display = nav.classList.contains('open') ? 'none' : 'block';
});

closeMenu.addEventListener('click', () => {
  nav.classList.remove('open');
  closeMenu.style.display = 'none';
  toggleNav.style.display = 'block';
});

closeLinks.forEach((closeLink) => {
  closeLink.addEventListener('click', (e) => {
    nav.classList.remove('open');
    closeMenu.style.display = 'none';
    toggleNav.style.display = 'block';
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});