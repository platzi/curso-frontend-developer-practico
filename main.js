const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive'); // que hace toggle, si tiene la clase lo va quitar y si no lo va agregar
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) { 
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenudClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenudClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}