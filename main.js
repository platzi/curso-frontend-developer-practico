const navMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.menu');

navMail.addEventListener('click', toggleDesktopMenu);
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}
  

