const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);
// toggle = intercabiar
function toggleDesktopMenu() {
  console.log('click');
  desktopMenu.classList.toggle('inactive');
  // remove elimina y toggle es un switf de true o false
}
