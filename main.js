const menuFromEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuBurgerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

menuFromEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
};

menuBurgerIcon.addEventListener("click", toggleMenuBurger);
function toggleMenuBurger() {
    mobileMenu.classList.toggle("inactive");
};


