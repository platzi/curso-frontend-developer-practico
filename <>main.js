const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenuIco = document.querySelector(".menu");
const menuMovil = document.querySelector(".mobile-menu");
const menuCarritoIco = document.querySelector(".navbar-shopping-cart");
const carritoDetalle = document.querySelector(".product-detail");

/* menu interactivo Email */
menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenuIco.addEventListener("click", toggleMovilMenu);
menuCarritoIco.addEventListener("click", toggleCarrito);

function toggleDesktopMenu() {
    const isCarritoDetalle = carritoDetalle.classList.contains("inactivo");
    if (!isCarritoDetalle) {
        carritoDetalle.classList.add("inactivo");
    }

    console.log("Click");
    desktopMenu.classList.toggle("inactivo");
}

console.log("js funcionando");

/* menu movil */
function toggleMovilMenu() {
    const isCarritoDetalle = carritoDetalle.classList.contains("inactivo");
    if (!isCarritoDetalle) {
        carritoDetalle.classList.add("inactivo");
    }
    menuMovil.classList.toggle("inactivo");
}

function toggleCarrito() {
    const isMenuMovilclosed = menuMovil.classList.contains("inactivo");
    const isMenuDesktopClosed = desktopMenu.classList.contains("inactivo");
    if (!isMenuMovilclosed || !isMenuDesktopClosed) {
        menuMovil.classList.add("inactivo");
        desktopMenu.classList.add("inactivo");
    }
    carritoDetalle.classList.toggle("inactivo");
}
