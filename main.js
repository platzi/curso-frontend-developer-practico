const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  //   desktopMenu.className === "desktop-menu inactive"
  //     ? (desktopMenu.className = "desktop-menu")
  //     : (desktopMenu.className = "desktop-menu inactive");
  desktopMenu.classList.toggle("inactive");
}
