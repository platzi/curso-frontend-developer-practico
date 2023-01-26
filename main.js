var menuEmail = document.querySelector(".navbar-email");
var desktopMenu = document.querySelector(".desktop-menu");
var mainMenu = document.querySelector(".menu");
var mobileMenu = document.querySelector(".mobile-menu");
var carritoMenu = document.querySelector(".navbar-shopping-cart");
var aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
mainMenu.addEventListener("click", toggleMobileMenu);
carritoMenu.addEventListener("click", toggleCarritoMenu);

function toggleDesktopMenu() {
  var isCarritoMenuClosed = aside.classList.contains("inactive");

  if (!isCarritoMenuClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  var isCarritoMenuClosed = aside.classList.contains("inactive");

  if (!isCarritoMenuClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoMenu() {
  var isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}
