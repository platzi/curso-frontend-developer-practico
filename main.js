let emailMenu = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let iconMenuMobile = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let iconShopping = document.querySelector('.navbar-shopping-cart');
let asideShopping = document.querySelector('.product-detail');

emailMenu.addEventListener('click', toggleMenu);
iconMenuMobile.addEventListener('click', toggleMenuMobile);
iconShopping.addEventListener('click', toggleAsideShopping)


function toggleMenu(){
    asideShopping.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile(){
    asideShopping.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
    
}

function toggleAsideShopping(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
    asideShopping.classList.toggle('inactive')
}