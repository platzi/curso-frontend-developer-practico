const menucorreo = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menucorreo.addEventListener ('click', mostrarMEnu);

function mostrarMEnu() {
desktopMenu.classList.toggle('inactive')
}