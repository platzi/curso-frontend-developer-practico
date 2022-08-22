const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const burgerMenuIcon = document.querySelector ('.menu');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const mobileMenu = document.querySelector ('.mobile-menu');
const aside = document.querySelector ('.product-detail');

menuEmail.addEventListener ('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener ('click', toggleMobileMenu);
menuCarritoIcon.addEventListener ('click', toggleCarritoMenu);


function toggleDesktopMenu () {
    const asideMenuClose = aside.classList.contains ('inactive');

    if (!asideMenuClose) {
        aside.classList.add ('inactive'); 
    }

    console.log ('click desktop menu');
    desktopMenu.classList.toggle ('inactive');
}

function toggleMobileMenu () {
    const asideMenuClose = aside.classList.contains ('inactive');


    if (!asideMenuClose) {
        aside.classList.add ('inactive'); 
    }

    console.log ('click mobile menu');
    mobileMenu.classList.toggle ('inactive');
}

function toggleCarritoMenu () {
    const mobileMenuClose = mobileMenu.classList.contains ('inactive');
    const descktopMenuClose = desktopMenu.classList.contains ('inactive');

    if (!descktopMenuClose) {
        desktopMenu.classList.add ('inactive');
    }

    if (!mobileMenuClose) {
        mobileMenu.classList.add ('inactive'); 
    }

    console.log ('click carrito');
    aside.classList.toggle ('inactive');
}