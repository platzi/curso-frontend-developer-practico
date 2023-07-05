const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMobileMenu = document.querySelector('.mobile-menu');
const burgerMenuIcon = document.querySelector('.menu');
const carritoMenuIcon = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');

// *Escuchamos los eventos de click de Icon

emailMenu.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleBurgerMobileMenu);
carritoMenuIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu() {

    const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    if (!isCarritoMenuClosed) {
        carritoMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}


function toggleBurgerMobileMenu() {

    // Captas en una variable (declaras) el estado en el que se encuentra el elemento carritoMenu

    const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    // Lo condicionas con !isMobileMenuClosed a lo inverso del estado declarado en la variable anterior
    if (!isCarritoMenuClosed) {
        carritoMenu.classList.add('inactive');
    }

    burgerMobileMenu.classList.toggle('inactive');
}


function toggleCarritoMenu() {

    const isMobileMenuClosed = burgerMobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        burgerMobileMenu.classList.add('inactive');
    }

    if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    carritoMenu.classList.toggle('inactive');
}

// TODO averiguar cual es la diferencia entre toggle y add, paraa que sirven los if else
// toggle quiere decir que desactive una clase y add que se la añadas, se trabaja a la inversa porque lo primero que haces es declarar las clases y sus propiedades


