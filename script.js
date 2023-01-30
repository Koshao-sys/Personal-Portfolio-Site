const toggleNav = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

toggleNav.addEventListener('click', function() {
  nav.classList.toggle('open');
  
});
