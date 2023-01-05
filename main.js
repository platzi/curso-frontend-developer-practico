const manuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
manuEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    /* desktopMenu.classList.add("active"); */
}