const navbar_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");

navbar_email.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktop_menu.classList.toggle("inactive");
}
