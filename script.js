// SE AGREGA LA FUNCION CLICK AL CORREO DEL USUARIO, PARA APARECER Y DESAPARECER EL MENU DE INGRESO.
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");





//codigo para navbar lado derecho-perfil usuario.
menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
// si carro de compras esta abierto, cierralo cuando de click al correo usuario.
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}


//codigo para icono hamburguesa lado izquierdo.
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
//si carro de compras esta abierto, cierralo cuando de click en menu hamburguesa.
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}


//codigo para el carro de compras.
menuCarIcon.addEventListener("click", toggleCarShopping);

function toggleCarShopping() {
//si menu hamburguesa esta abierto, cierralo cuando de click en carro de compras.
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

// si correo usuario esta abierto, cierralo cuando de click al carro de compras.
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}