const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguesaMenu = document.querySelector(".menu");
const MobilMenu = document.querySelector(".mobile-menu")
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCarrito = document.querySelector(".product-detail");


menuEmail.addEventListener("click", aparecerMenu);
hamburguesaMenu.addEventListener("click", aparecerMenuHamburguesa);
carritoIcon.addEventListener("click", aparecerCarritoDeCompras);

function aparecerMenu () {
    if (!asideCarrito.classList.contains("inactive")) {
        asideCarrito.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");
}

function aparecerMenuHamburguesa () {
    if (!asideCarrito.classList.contains("inactive")) {
        asideCarrito.classList.add("inactive")
    }
    MobilMenu.classList.toggle("inactive");
}

function aparecerCarritoDeCompras(){
    if (!MobilMenu.classList.contains("inactive")) {
        MobilMenu.classList.add("inactive")
    } 
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive")
    }
    asideCarrito.classList.toggle("inactive");
}



