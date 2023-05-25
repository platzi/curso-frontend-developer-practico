"use strict";

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);

/* refactor code */
/* const toggleElement = (ev) => {
  ev.classList.toggle("inactive");
};

navEmail.addEventListener("click", () => toggleElement(desktopMenu));
burgerMenu, addEventListener("click", () => toggleElement(mobileMenu)); */
