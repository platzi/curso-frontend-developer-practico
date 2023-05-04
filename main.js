/*.***Navbar desktop Menu*** */
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toogleDesktopMenu);

function toogleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

/* *** Menu en movile *** */
const menuAmburgesa = document.querySelector(".menu");
const movileMenu = document.querySelector(".mobile-menu");

menuAmburgesa.addEventListener("click", toogleMovileMenu);

function toogleMovileMenu() {
    movileMenu.classList.toggle("inactive");
}
