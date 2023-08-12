
/*Quita y pone el menu del usiario d ela derecha*/

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggDesktopMenu);

function toggDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
  //varía entre quitar y poner la clase inactive a al menú desplegable
  //la clase inactive tiene un estilo que oculta el menú
}
