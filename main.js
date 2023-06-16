//alert('hola')

const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu (){
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
}

