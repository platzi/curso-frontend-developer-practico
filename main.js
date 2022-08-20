//MENU DESKTOP
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//WORK
function toggleDesktopMenu() {
  // si la clase inactive está presente la elimina, de lo contrario la añade
  desktopMenu.classList.toggle("inactive");
}

//EVENT
navEmail.addEventListener("click", toggleDesktopMenu);
