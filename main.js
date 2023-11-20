const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
mobileMenu.addEventListener("mouseout", outMobil);
desktopMenu.addEventListener("mouseout", outDesktop);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

function outMobil() { // Guarda el menu mobile guando se sale del contenedor
    mobileMenu.classList.toggle('inactive');
}
function outDesktop() { // Guarda el menu desktop cuando se sale del contendor
    desktopMenu.classList.toggle('inactive');
}