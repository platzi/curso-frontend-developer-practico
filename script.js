// SE AGREGA LA FUNCION CLICK AL CORREO DEL USUARIO, PARA APARECER Y DESAPARECER EL MENU DE INGRESO.
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")






//codigo para navbar lado derecho-perfil usuario.
menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

//codigo para icono hamburguesa lado izquierdo.
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");

}