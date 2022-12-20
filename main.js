const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const myOrder = document.querySelector('.my-order');
const shoppingCart = document.querySelector('.navbar-shopping-cart');

navbarEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleMyOrder);

function toggleDesktopMenu(){
    myOrder.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    myOrder.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleMyOrder(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    myOrder.classList.toggle('inactive');
}