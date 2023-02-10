// *DESGLOSADOR DEL PEQUEO MENU DE DATOS DEL EMAIL
const navBarEmail = document.querySelector(".navbar-email");
const NavDesktopMenu = document.querySelector(".desktop-menu");

navBarEmail.addEventListener("click", toggleDesktopEmail);

function toggleDesktopEmail() {
   // toggle funciona como un interruptor
   // EN ESTE CASO AGREGA O ELIMINA LA CLASE INACTIVE
   NavDesktopMenu.classList.toggle("inactive");
}

// * SECCTION MENU MOBILE
const navMobileMenuDetalles = document.querySelector(".mobile-menu");
const mobileMenu = document.querySelector(".mobile-hamburger");

mobileMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
   navMobileMenuDetalles.classList.toggle("inactive");
   // para cancelar el detalle del (del listado del carrito)
   detalleProductShoppingCart.classList.remove("inactive");
}

// *ACTIVADOR Y DESACTIVADOR DE DETALLES DE PRODUCTION DEL CARRITO DE COMPRAS
const iconShoppingCart = document.querySelector(".navbar-shopping-cart");
const detalleProductShoppingCart = document.querySelector(".product-detail");

iconShoppingCart.addEventListener("click", toggleProductShopingCart);

function toggleProductShopingCart() {
   detalleProductShoppingCart.classList.toggle("inactive");
   navMobileMenuDetalles.classList.remove("ianctive");
}
