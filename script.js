const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}

function toggleCarritoAside(){
    aside.classList.toggle('inactive')
}
