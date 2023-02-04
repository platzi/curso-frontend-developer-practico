/*General variables*/
const carShopIcon = document.querySelector(".navbar-shopping-cart");
const carShopView = document.querySelector(".product-detail");
const body = document.querySelector('body')
/*Desktop Menu*/
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/*Mobile menu*/
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu ");


carShopIcon.addEventListener("click", () => {
  carShopView.classList.toggle("activeCarShop");
  mobileMenu.classList.remove("activeMobile");
  desktopMenu.classList.remove('activeDesktop')
});

navEmail.addEventListener("click", () => {
  desktopMenu.classList.toggle("activeDesktop");
  carShopView.classList.remove("activeCarShop");
});

burguerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("activeMobile");
  carShopView.classList.remove("activeCarShop");
});
