const navEmail = document.querySelector(".navbar-email");
const burguerIcon = document.querySelector(".menu");
const shopIcon = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

//Otra manera más eficiente

navEmail.addEventListener("click", toggleDesktopMenu);
burguerIcon.addEventListener("click", toggleMobileMenu);
shopIcon.addEventListener("click", toggleCardAside);

function toggleDesktopMenu() {
  aside.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  aside.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

function toggleCardAside() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  aside.classList.toggle("inactive");
}

const productList = [];

/*----MI MANERA----

navEmail.addEventListener("click", () => toggleElement(desktopMenu));
burguerIcon.addEventListener("click", () => toggleElement(mobileMenu));
shopIcon.addEventListener("click", () => toggleElement(aside));

function toggleElement(element) {
  element.classList.toggle("inactive");
  switch (element.getAttribute("class")) {
    case desktopMenu.getAttribute("class"):
      aside.classList.add("inactive");
      break;
    case mobileMenu.getAttribute("class"):
      aside.classList.add("inactive");
      break;
    case aside.getAttribute("class"):
      desktopMenu.classList.add("inactive");
      mobileMenu.classList.add("inactive");
      break;
  }
}
*/

/*
//---Manera Tradicional
navEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

burguerIcon.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
*/
