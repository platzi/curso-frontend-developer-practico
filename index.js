const emailLinkUI = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailLinkUI.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  console.log('hi!');
}
