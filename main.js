var navbarEmail = document.querySelector('.navbar-email');
var menuHamIcon = document.querySelector('.menu');

var desktopMenu = document.querySelector('.desktop-menu');
var mobileMenu = document.querySelector('.mobile-menu');

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(event){
    mobileMenu.classList.toggle('inactive')
}

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);