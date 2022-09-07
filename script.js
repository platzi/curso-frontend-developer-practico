let desktopMenu = document.querySelector('.desktop-menu');
let navbarEmail = document.querySelector('.navbar-email');
let hamburgerIcon = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let carritoIcon = document.querySelector('.navbar-shopping-cart');
let aside = document.querySelector('.product-detail');
let closeAsideIcon = document.querySelector('.product-detail-close');


navbarEmail.addEventListener('click', toggleMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleAside);
closeAsideIcon.addEventListener('click', toggleAside);


function toggleMenu() {
    let isAsideClosed = aside.classList.contains('inactive');
// Pregunta si el aside se está mostrando en pantalla es decir que no contiene la clase inactive
// si está activo le hace toggle a la clase para que se agregue la clase inactive y ya no aparezca en pantalla
    if(!isAsideClosed) {
        aside.classList.toggle('inactive');
    }
// luego de esa verificación si hace toggle del desktop menu para que no quede una cosa sobre otra y se pueda ver bien
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    let isAsideClosed = aside.classList.contains('inactive');
// Pregunta si el aside se está mostrando en pantalla es decir que no contiene la clase inactive
// si está activo le hace toggle a la clase para que se agregue la clase inactive y ya no aparezca en pantalla
    if(!isAsideClosed) {
        aside.classList.toggle('inactive');
    }
// luego de esa verificación si hace toggle del mobile menu para que no quede una cosa sobre otra
    mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');
}