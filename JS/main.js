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
    const isProductDetailDesktopClose = productDetail.classList.contains("inactive");
    if (!isProductDetailDesktopClose) {
        productDetail.classList.add("inactive");
    }

    menuDesktop.classList.toggle("inactive");

}

function toggleMobileMenu() {
    const isProductDetailClose = productDetail.classList.contains("inactive");
    if (!isProductDetailClose) {
        productDetail.classList.add("inactive");
    }

    menuMobile.classList.toggle("menu-inactive");
}
function toggleCarritoMenu(){
    const isMobileMenuClose = menuMobile.classList.contains("menu-inactive");
    const isMenuDesktopClose = menuDesktop.classList.contains("inactive");

    if (!isMobileMenuClose) {
        menuMobile.classList.add("menu-inactive");
    }
   if (!isMenuDesktopClose) {
        menuDesktop.classList.add("inactive");
   }

    productDetail.classList.toggle("inactive");

}