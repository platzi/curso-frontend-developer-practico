const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDestopMenu);

//Esta funcion alternará la clase inactive
function toggleDestopMenu() {
    desktopMenu.classList.toggle("inactive");
}

