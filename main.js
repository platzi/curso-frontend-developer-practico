
const menuEmail = document.querySelector('.navbar-email'); /*Seleccion de elementos html por su clase */
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);/*Escuchar su evento de click */


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); /*Quita o pone la clase independiente si ya la tiene o no */
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

