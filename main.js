const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  console.log("Click");
  desktopMenu.classList.toggle("inactive");

  if (desktopMenu.classList.contains('inactive')) {
    console.log('El elemento tiene la clase "inactive"');
}

}

console.log("JS funcionando");
