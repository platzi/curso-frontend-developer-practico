const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
    console.log('Click');

    const isAsideclosed = aside.classList.contains('inactive');

    if(!isAsideclosed)
    {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('Click');

    const isAsideclosed = aside.classList.contains('inactive');

    if(!isAsideclosed)
    {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    console.log('Click');

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
    
}