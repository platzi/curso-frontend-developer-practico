const emailNavbar = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHam = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const carritoMenu = document.querySelector(".carrito");
const productDetail = document.querySelector(".product-detail");



emailNavbar.addEventListener("click", toggleDesktopMenu);
menuHam.addEventListener("click", toggleMobileMenu);
carritoMenu.addEventListener("click", toggleCarritoMenu);

function toggleDesktopMenu() {
    menuDesktop.classList.toggle("inactive");

}

function toggleMobileMenu() {
    menuMobile.classList.toggle("menu-inactive");
}
function toggleCarritoMenu(){
    const isMobileMenuClose = menuMobile.classList.contains("menu-inactive");

    if (!isMobileMenuClose) {
        menuMobile.classList.add("menu-inactive");
    }

    productDetail.classList.toggle("inactive");

}