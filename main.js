let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let menuHamburguesa = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleBurguerMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactivo");
    console.log("hola")
}

function toggleBurguerMenu() {
    mobileMenu.classList.toggle("inactivo");
    console.log("hola")
}