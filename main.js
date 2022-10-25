const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

   desktopMenu.classList.toggle('inactive');
   aside.classList.add('inactive');
}

const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuBurger.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuCarrito.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside(){

    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}


