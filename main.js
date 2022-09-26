const menuNav = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuNav.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inative");
}