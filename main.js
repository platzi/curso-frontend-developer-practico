var [menuEmail] = document.getElementsByClassName("navbar-email");
var [desktopMenu] = document.getElementsByClassName("desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
