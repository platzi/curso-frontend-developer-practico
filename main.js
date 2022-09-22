                // ABRIR Y CERRAR MENUS
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// Desktopmenu es el correo
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
// Aside es el carrito

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    //Función para cerrar el carrito cuando se abre el menú del correo
    const isAsideClosed = aside.classList.contains('inactive');
// !isAsideClosed = si no esta cerrado
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    //Función para cerrar el carrito cuando se abre el menú mobile
    const isAsideClosed = aside.classList.contains('inactive');
// !isAsideClosed = si no esta cerrado
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    //Función para cerrar el menú mobile al abrir el carrito
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
// !isMobileMenuClosed = si no esta cerrado
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    // Función para cerrar el menú del correo al abrir el carrito
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
// isDesktopMenuClosed = si no esta cerrado    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

                // Lista de productos