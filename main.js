const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    // Si el aside está open, hay que cerrarlo
    if (!isAsideClosed) {
        aside.classList.add('inactive');    
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    // Si el aside está open, hay que cerrarlo
    if (!isAsideClosed) {
        aside.classList.add('inactive');    
    }

    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    // Si el mobileMenu está open, hay que cerrarlo
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');    
    }

    aside.classList.toggle('inactive');
};



