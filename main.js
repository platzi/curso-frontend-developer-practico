let navbarEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let hamburgerIcon = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleMenu);

function toggleMenu(){
    desktopMenu.classList.toggle('inactive');
}

hamburgerIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}