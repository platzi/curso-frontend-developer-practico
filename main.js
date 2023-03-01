const navLink = document.querySelector(".navbar-email");
const desktopInactive = document.querySelector(".desktop-menu");


navLink.addEventListener("click", toggleMenu);

function toggleMenu() {
    desktopInactive.classList.toggle("inactive");
}
