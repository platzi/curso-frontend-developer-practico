const navEmail = document.querySelector('.navbar-email');
const navEmailSubMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopmenu);

function toggleDesktopmenu() {
  navEmailSubMenu.classList.toggle('inactive')
};