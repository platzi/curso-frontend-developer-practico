
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('mouseover', showDesktopMenu);

function showDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
};
