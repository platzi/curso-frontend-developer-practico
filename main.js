const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
//fin de variables

function menuDesplegable() {
    menuDesktop.classList.toggle('inactive');
}
menuEmail.addEventListener('click', menuDesplegable);
