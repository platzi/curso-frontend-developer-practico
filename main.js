const menuEmail = document.querySelector('.navbar-email');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  const desktopMenu = document.querySelector('.desktop-menu');
  desktopMenu.classList.toggle('inactive');
}