const emailMenu = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.desktop__menu');
const burguerMenu = document.querySelector('.navbar__menu');
const mobileMenu = document.querySelector('.mobile__menu');

emailMenu.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}