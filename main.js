const menuEMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEMail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
}