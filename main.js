const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
carritoMenu.addEventListener('click', toogleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

burguerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');    
});

function toogleCarritoAside() {
    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    // const isAsideClosed = aside.classList.contains('inactive');
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive'); 
    desktopMenu.classList.add('inactive');
}

