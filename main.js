const navEmail = document.querySelector('.navbar-email');
const navEmailSubMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopmenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopmenu() {
  navEmailSubMenu.classList.toggle('inactive')
};
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive')
};