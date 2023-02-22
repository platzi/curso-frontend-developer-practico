const menuEmail = document.querySelector('.navbar-email'); // Email on the navbar
const desktopMenu = document.querySelector('.desktop-menu'); // Desktop menu
const mobileMenuLogo = document.querySelector('.menu'); //Mobile menu Logo
const mobileMenu = document.querySelector('.mobile-menu'); //Mobile menu

//Clicking email on the navbar
menuEmail.addEventListener('click', toggleDesktopMenu); 
//Clicking menu on the mobile version
mobileMenuLogo.addEventListener('click', toogleMobileMenu);



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}