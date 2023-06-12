const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){ //esta función hará que la clase inactive aparezca o desaparezca (lo cual hará que así mismo el menú aparezca o no)
    desktopMenu.classList.toggle("inactive");
}