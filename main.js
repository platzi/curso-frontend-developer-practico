const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isasideClosed = aside.classList.contains('inactive');

    if(!isasideClosed) {
        aside.classList.add('inactive');
    }

    // .classList es para ver qué clases tiene el elemento
    // .toggle es para activar o desactivar la clase seleccionada
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isasideClosed = aside.classList.contains('inactive');

    if(!isasideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');



    if(!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}