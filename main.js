const navEmail = document.querySelector('.navbar-email');
const navDesktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
  // navDesktopMenu.classList.remove('inactive') Este lo hice yo pensando en remover la clase
  navDesktopMenu.classList.toggle('inactive')
}