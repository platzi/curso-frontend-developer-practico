// alert("Verificando que JS fxne")

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu() {
    // Con esto, quito o pongo clase "inactive" dependiendo de si la tiene o no
    desktopMenu.classList.toggle("inactive")
}