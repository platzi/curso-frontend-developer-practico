const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

navEmail.addEventListener("click", () => toggleElement(desktopMenu))
menuHamburgerIcon.addEventListener("click", () => toggleElement(mobileMenu));
menuHamburgerIcon.addEventListener("click", () => toggleMobileMenu());
menuCarIcon.addEventListener("click", () => toggleCarritoAside());
navEmail.addEventListener("click", () => toggleEmailMenu());

function toggleElement(element) {
  element.classList.toggle("inactive");
}

function toggleEmailMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive")
    desktopMenu.classList.remove("inactive");
  }
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    desktopMenu.classList.add("inactive")
    aside.classList.add("inactive");
  }
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
  desktopMenu.classList.add("inactive")
}
