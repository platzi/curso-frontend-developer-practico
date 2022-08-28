const navbar_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const asideCart = document.querySelector(".product-detail");

navbar_email.addEventListener("click", toggleDesktopMenu);
shoppingCart.addEventListener("click", toggleShoppingAside);
menuMobile.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktop_menu.classList.toggle("inactive");
  asideCart.classList.add("inactive");
}

function toggleMobileMenu() {
  asideCart.classList.add("inactive");
  mobile_menu.classList.toggle("inactive");
}

function toggleShoppingAside() {
  asideCart.classList.toggle("inactive");
  mobile_menu.classList.add("inactive");
  desktop_menu.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  precio: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  precio: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computador",
  price: 3320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const img = document.createElement("img");
  img.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");
  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  const productName = document.createElement("p");
  productName.innerText = product.name;

  const productInfoFigure = document.createElement("figure");
  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
}
