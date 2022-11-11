const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

//Cada vez que le den click al correo de arriba a la derecha,
//esta funcion hara un toggle
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}