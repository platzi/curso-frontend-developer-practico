var navbarEmail = document.querySelector('.navbar-email');
var menuHamIcon = document.querySelector('.menu');
var menuCarIcon = document.querySelector('.navbar-shopping-cart');

var desktopMenu = document.querySelector('.desktop-menu');
var mobileMenu = document.querySelector('.mobile-menu');
var carMenu = document.querySelector('.product-detail');


navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarMenu);

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive')
    carMenu.classList.add('inactive')
}

function toggleMobileMenu(event){
    mobileMenu.classList.toggle('inactive')
    carMenu.classList.add('inactive')
}

function toggleCarMenu(event){
    carMenu.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
}