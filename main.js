const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

//Cada vez que le den click al correo de arriba a la derecha,
//esta funcion hara un toggle
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}