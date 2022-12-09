const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const sandwichMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".order-details");

const productList = [];

menuEmail.addEventListener("click", toggleDesktopMenu);
sandwichMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
  const shoppingCartClosed = shoppingCart.classList.contains("inactive");

  if (!shoppingCartClosed) {
    shoppingCart.classList.toggle("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const shoppingCartClosed = shoppingCart.classList.contains("inactive");

  if (!shoppingCartClosed) {
    shoppingCart.classList.toggle("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
  const mobileMenuClosed = mobileMenu.classList.contains("inactive");
  const desktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!mobileMenuClosed) {
    mobileMenu.classList.toggle("inactive");
  } else if (!desktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }

  shoppingCart.classList.toggle("inactive");
}

productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
