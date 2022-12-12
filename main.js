// Función que permite abreviar y agilizar el querySelector
const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const profileMenu = $('.desktop-menu');
const burguerMenu = $('.menu');
const mobileMenu = $('.mobile-menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const aside = $('.product-detail');

menuEmail.addEventListener('click', toggleprofileMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);



function toggleprofileMenu() {
    const isAsideClose = aside.classList.contains('inactive');
    if (!isAsideClose) {
        aside.classList.add('inactive');
    }
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    profileMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains('inactive');
    if (!isAsideClose) {
        aside.classList.add('inactive');
    }

    const isProfileMenuClose = profileMenu.classList.contains('inactive');
    if (!isProfileMenuClose) {
        profileMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProfileMenuClose = profileMenu.classList.contains('inactive');
    if (!isProfileMenuClose) {
        profileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}



// Verificar que el JS este conectado al
console.log('JS Funcionando');