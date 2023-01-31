//selectores del menu email en desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');

//selectores para el menu mobile
const MobileMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

//escuchando el evento click del menu desktop
menuEmail.addEventListener('click', toggleDesktopMenu)

//escuchando el evento click del menu mobile
MobileMenuIcon.addEventListener('click', toggleMobileMenu)

//funcion toggle para el menu en desktop
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

//funcion toggle para el menu en mobile
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}