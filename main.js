let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactivo");
    console.log("hola")
}