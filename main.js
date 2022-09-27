// const navbarEmail = document.querySelector(".navbar-email");
// const desktopMenu = document.querySelector(".desktop-menu");

// navbarEmail.addEventListener("click", toggleDesktopMenu);

// function toggleDesktopMenu() {
//     desktopMenu.classList.toggle("inactive");
// }

// // Seleccionar mobile menu para hacer que aparezca y desaparezca
// // y el menu hamburguesa clase 19
// const mobileMenu = document.querySelector(".mobile-menu");
// const burguerMenuIcon = document.querySelector(".menu");

// burguerMenuIcon.addEventListener("click", toggleMobileMenu);

// function toggleMobileMenu() {
//     mobileMenu.classList.toggle("inactive");
// }

// //Seleccionamos el ocono del carrito para mostrar el detalle del pedido clase 20
// const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");

// //aside
// const productDetail = document.querySelector(".product-detail");
// navbarShoppingCart.addEventListener("click", toggleShoppinngCart);

// function toggleShoppinngCart() {

//     const isMobileMenuClosed = mobileMenu.classList.contains("incactive");
//     const isProductDetailClosed = productDetail.classList.contains("incactive");

//     // Esto hace que se cierre si se abre otra opcion
//     if (isMobileMenuClosed) {
//         mobileMenu.classList.add("inactive");
//     }

//     productDetail.classList.toggle("inactive");
// }

const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}