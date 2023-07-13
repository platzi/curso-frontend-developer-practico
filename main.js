const menuEmail = document.querySelector('.navbar-email');//para conectar con el elemento del email de barra de navegacion
const desktopMenu = document.querySelector('.desktop-menu');//para conectar con el menu desktop
const menuHamburguerIcon = document.querySelector('.menu');//para conectar con el elemento sanduche dde barra de navegacion
const mobileMenu = document.querySelector('.mobile-menu');//para conectar con el menu mobile

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguerIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    console.log('clickeando');
    desktopMenu.classList.toggle('inactive');//toggle -> permite intercambiar
}
function toggleMobileMenu(){
    console.log('clickeando');
    mobileMenu.classList.toggle('inactive');//toggle -> permite intercambiar
}