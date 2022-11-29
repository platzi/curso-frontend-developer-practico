
const menuEmail   = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');
 
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    // toggle quita o pone la clase, dependiendo de si la tiene o no
    desktopMenu.classList.toggle('inactive');     
}

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}