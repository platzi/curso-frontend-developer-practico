const menuEmail = document.querySelector('.nav-bar');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu (){
  desktopMenu.classList.toggle('inactive');
}