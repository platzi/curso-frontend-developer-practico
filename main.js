const menuMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartAside = document.querySelector(".product-detail");

menuMail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
  if (!shoppingCartAside.classList.contains("inactive")) {
    shoppingCartAside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");

  if (!shoppingCartAside.classList.contains("inactive")) {
    shoppingCartAside.classList.add("inactive");
  }
}

function toggleShoppingCart() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isAsideCarritoOpen = !shoppingCartAside.classList.contains("inactive");

  if (isAsideCarritoOpen) {
    // its open
    shoppingCartAside.classList.add("inactive");
  } else {
    // its close
    shoppingCartAside.classList.remove("inactive");
    isMobileMenuOpen == true ? mobileMenu.classList.add("inactive") : "";
  }

  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
}
