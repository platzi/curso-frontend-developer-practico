/*.***Navbar desktop Menu*** */
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toogleDesktopMenu);

function toogleDesktopMenu() {
    const isAsiceClose = aside.classList.contains("inactive");

    if (!isAsiceClose) {
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

/* *** Menu en movile *** */
const menuAmburgesa = document.querySelector(".menu");
const movileMenu = document.querySelector(".mobile-menu");

menuAmburgesa.addEventListener("click", toogleMovileMenu);

function toogleMovileMenu() {
    const isAsiceClose = aside.classList.contains("inactive");

    if (!isAsiceClose) {
        aside.classList.add("inactive");
    }
    movileMenu.classList.toggle("inactive");
}

/* ***** Carrito de compras***** */
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuCarritoIcon.addEventListener("click", toogleProductDetail);

function toogleProductDetail() {
    const isMovilMenuClose = movileMenu.classList.contains("inactive");
    const isDesktopMenu = desktopMenu.classList.contains("inactive");

    if (!isDesktopMenu) {
        desktopMenu.classList.add("inactive");
    }

    if (!isMovilMenuClose) {
        movileMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}
