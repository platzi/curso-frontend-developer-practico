// SELECION DE LOS ELEMENTOS MEDIANTE UN QUERYSELECTOR 
const desktopMenu = document.querySelector(".desktop-menu");
const navbarEmail = document.querySelector(".navbar-email");
const burgerIconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mainCarIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");


// ASIGNACION DE LOS EVENT LISTENERS 
navbarEmail.addEventListener("click", togggleShowDesktopMenu);
burgerIconMenu.addEventListener('click', togggleMobileMenu)
mainCarIcon.addEventListener('click', togggleCarAside)


// FUNCIONES DE ASIGNACION Y SELECION DE LAS CLASES
function togggleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        // si mobilemenu esta open, hay que cerrarlo
        mobileMenu.classList.add('inactive')
    }
    if (!isDDesktopMenuClosed) {
        // si mobilemenu esta open, hay que cerrarlo
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}

function togggleShowDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle("inactive");
}

function togggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        // si mobilemenu esta open, hay que cerrarlo
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle("inactive");
}
