const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    //cuando addEvent escuche el click, debe eliminar la clase "inactive" del menu y quedarse con desktop-menu
   
  desktopMenu.classList.toggle('inactive');
}

