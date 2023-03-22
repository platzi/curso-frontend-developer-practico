const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
// menuEmail.addEventListener("click", toggleDesktopMenu);

const iconBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
// iconBurger.addEventListener("click", toggleMobileMenu);

const iconShopingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
// iconShopingCart.addEventListener("click", toggleIconShopingCart);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleIconShopingCart() {
  desktopMenu.classList.add("inactive");

  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}
