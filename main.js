const navEmail = document.getElementsByClassName("navbar-email")[0];
const desktopMenu = document.getElementsByClassName("desktop-menu")[0];
const hamburgerMenuIcon = document.getElementsByClassName("menu")[0];
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const cartMenuIcon = document.getElementsByClassName("navbar-shopping-cart")[0];
const cartMenu = document.getElementsByClassName("product-detail")[0];

navEmail.addEventListener("click", toggleDesktopNav);
hamburgerMenuIcon.addEventListener("click", toggleMobileMenu);
cartMenuIcon.addEventListener("click", toggleCartMenu);

function toggleDesktopNav() {
  isCartMenuClosed = cartMenu.classList.contains("inactive");
  if (!isCartMenuClosed) {
    cartMenu.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  isCartMenuClosed = cartMenu.classList.contains("inactive");
  if (!isCartMenuClosed) {
    cartMenu.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCartMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  !isMobileMenuClosed
    ? mobileMenu.classList.add("inactive")
    : !isDesktopMenuClosed
    ? desktopMenu.classList.add("inactive")
    : null;
  cartMenu.classList.toggle("inactive");
}
