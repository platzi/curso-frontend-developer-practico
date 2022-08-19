const userEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

userEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
  desktopMenu.classList.toggle('inactive');
}