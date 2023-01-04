const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconBurgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navbarEmail.addEventListener("click", toggleDesktopMenu);
iconBurgerMenu.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("active");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
}
