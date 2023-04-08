const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");

menuEmail.addEventListener("mouseover", toggleDesktopMenu);

function toggleDesktopMenu() {
    menuDesktop.classList.toggle("inactive");
}