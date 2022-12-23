//selectores
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


// agrega el evento al elemento
emailMenu.addEventListener('click',toggleMenuDesktop);
menuHamburgerIcon.addEventListener('click',toogleMenuMobile);

// funcion para cambiar la clase al menu
function toggleMenuDesktop(){
    desktopMenu.classList.toggle('inactive');
}

// funcion para menuHamburgerIcon
function toogleMenuMobile(){
    mobileMenu.classList.toggle('inactive');
}