const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const carritoDeCompras = document.querySelector(".product-detail");

menuCarritoIcon.addEventListener('click', toggleCarritoCompras);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    const isCarritoComprasClosed = carritoDeCompras.classList.contains('inactive');

    if (!isCarritoComprasClosed) {

            carritoDeCompras.classList.add("inactive");
       
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCarritoComprasClosed = carritoDeCompras.classList.contains('inactive');

    if (!isCarritoComprasClosed) {

            carritoDeCompras.classList.add("inactive");
       
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoCompras() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {

        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");   
   
    }

    carritoDeCompras.classList.toggle("inactive")

}


