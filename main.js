const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener("click", () => toggleElement(desktopMenu));
menuHamburgerIcon.addEventListener("click", () => toggleElement(mobileMenu));

function toggleElement(element) {
  element.classList.toggle("inactive");
}
