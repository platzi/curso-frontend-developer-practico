const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcom = document.querySelector('.menu-ham-icon');
const menuCartIcom = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcom.addEventListener('click', toggleMobileMenu);
menuCartIcom.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
    console.log('Click Email');

    const isCartAsideOpen = !aside.classList.contains('Inactive');
    if ( isCartAsideOpen ){
        aside.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}   

function toggleMobileMenu() {
    console.log('Click Mobile Menu');

    const isCartAsideOpen = !aside.classList.contains('Inactive');
    if ( isCartAsideOpen ){
        aside.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}   

function toggleCartAside() {
    console.log('Click Cart Icon');

    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if ( isDesktopMenuOpen ){
        desktopMenu.classList.toggle('inactive');        
    };

    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    if ( isMobileMenuOpen ){
        mobileMenu.classList.toggle('inactive');
    };

    aside.classList.toggle('inactive');
}

console.log('main.js iniciado en HTML');