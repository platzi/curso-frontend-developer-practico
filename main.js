// Toggle Desktop Menu

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleMenu);

function toggleMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}


// Toggle Mobile Menu

const desplegableMovil = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');

desplegableMovil.addEventListener('click', toggleMobile);

function toggleMobile() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive')
    }

    mobilMenu.classList.toggle('inactive');
}

// Toggle carrito

const iconoCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

iconoCarrito.addEventListener('click', toggleCarrito);

function toggleCarrito() {
    const isMobileMenuOpen = !mobilMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobilMenu.classList.add('inactive')
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}