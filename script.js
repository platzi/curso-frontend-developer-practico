const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const asaid = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleasaid)

function toggleDesktopMenu() {

    const isAsaidClose = asaid.classList.contains('inactive');

    if (!isAsaidClose) {
        asaid.classList.add('inactive');
    
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsaidClose = asaid.classList.contains('inactive');

    if (!isAsaidClose) {
        asaid.classList.add('inactive');
    
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleasaid() {
    const ismobileMenuclose = mobileMenu.classList.contains('inactive');

    if (!ismobileMenuclose) {
        mobileMenu.classList.add('inactive');
    
    }
    
    asaid.classList.toggle('inactive');
    
}
