//menu-var se añade a navbar

const menu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");

//menu-var-mobile se añade a navbar
const mobileMenu = document.querySelector(".mobile-menu");
const navMobile = document.querySelector(".menu");

//menu-carrito se añade al documento

const carMenu = document.querySelector(".product-detail");
const carIcon = document.querySelector(".navbar-shopping-cart");

navEmail.addEventListener("click", toggleDesktopMenu);

navMobile.addEventListener("click", toggleMobileMenu);

carIcon.addEventListener("click", toggleCarMenu);


function toggleDesktopMenu() {

    const isCarMenuClose = carMenu.classList.contains('inactive');

    if (!isCarMenuClose) {
        carMenu.classList.add("inactive");
    }

    menu.classList.toggle("inactive");

}

function toggleMobileMenu() {
    const isCarMenuClose = carMenu.classList.contains('inactive');

    if (!isCarMenuClose) {
        carMenu.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");

}

function toggleCarMenu() {
    // Se crean constantes para almacenar si los elementos tiene la clase inactive

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    const isDesktopMenuClose = menu.classList.contains('inactive');

    // Se niegan para abrirlas, ya que al hacer clic se las añade

    if (!isMobileMenuClose) {
        mobileMenu.classList.add("inactive");
    }

    if (!isDesktopMenuClose) {
        menu.classList.add("inactive");
    }

    carMenu.classList.toggle("inactive");



}