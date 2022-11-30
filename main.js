const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const BurgerBtn = document.querySelector(".menu");
const BurgerMenu = document.querySelector(".mobile-menu");
const ShoppingBtn = document.querySelector(".navbar-shopping-cart");
const shoppingMenu = document.querySelector(".product-detail");

email.addEventListener("click", toggleDesktopMenu);
BurgerBtn.addEventListener("click", toggleMobileMenu);
ShoppingBtn.addEventListener("click", toggleShoppingMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  let DesktopMenuOpen = shoppingMenu.classList.contains("inactive");
  if (!DesktopMenuOpen) {
    shoppingMenu.classList.add("inactive");
  }
}
function toggleMobileMenu() {
  BurgerMenu.classList.toggle("inactive");
  let BurgerOpen = shoppingMenu.classList.contains("inactive");
  if (!BurgerOpen) {
    shoppingMenu.classList.add("inactive");
  }
}
function toggleShoppingMenu() {
  shoppingMenu.classList.toggle("inactive");
  let ShopOpen = BurgerMenu.classList.contains("inactive");
  let ShopOpenforDesk = desktopMenu.classList.contains("inactive");
  if (!ShopOpenforDesk) {
    desktopMenu.classList.add("inactive");
  }
  if (!ShopOpen) {
    BurgerMenu.classList.add("inactive");
  }
}
