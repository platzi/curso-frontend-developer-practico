const menuEmail= document.querySelector('.navbar-email');
const desktopmenu =document.querySelector('.desktop-menu');
const menuHamburger= document.querySelector('.menuHamburger');
const mobileMenu= document.querySelector('.mobile-menu');


menuEmail.addEventListener('click',toggleDesktopMenu); //Crear funcion con ese nombre

function toggleDesktopMenu(){
    desktopmenu.classList.toggle('inactive');
}

menuHamburger.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}