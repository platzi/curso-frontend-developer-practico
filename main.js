const navEmail = document.getElementsByClassName("navbar-email")[0];
const desktopMenu = document.getElementsByClassName("desktop-menu")[0];
console.log(desktopMenu[0]);

navEmail.addEventListener("click", toggleDesktopNav);

function toggleDesktopNav() {
  desktopMenu.classList.toggle("inactive");
}
