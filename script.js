// SE AGREGA LA FUNCION CLICK AL CORREO DEL USUARIO, PARA APARECER Y DESAPARECER EL MENU DE INGRESO.
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}