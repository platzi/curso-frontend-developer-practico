const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const BurgerBtn = document.querySelector(".menu");
const BurgerMenu = document.querySelector(".mobile-menu");

email.addEventListener("click", toggleDesktopMenu);
BurgerBtn.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  BurgerMenu.classList.toggle("inactive");
}
