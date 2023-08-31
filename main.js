/**
 * Elements
 */

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burgerMenu = document.querySelector("img.menu");
const mobileMenu = document.querySelector(".mobile-menu");

const navbarShoppingCrat = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shopping-cart-container");

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector("#product-detail");
const productDetailExitBtn = document.querySelector(".product-detail-close")


const productsList = [];

createSamplePorducts();
loadProducts();


function createSamplePorducts() {
  let product1 = {
    name: "Bike",
    price: "120.00",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };
  let product2 = {
    name: "Pantalla",
    price: "120.00",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };
  let product3 = {
    name: "Compu",
    price: "120.00",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };
  productsList.push(product1);
  productsList.push(product2);
  productsList.push(product3);
}

function loadProducts() {
  for (product of productsList) {
    const productCard = createProductCard(product);
    productCard.addEventListener('click', openProductDetailContainer);
  }
}

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const img = document.createElement("img");
  img.setAttribute("src", product.image);
  productCard.append(img);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  productCard.append(productInfo);

  const div = document.createElement("div");
  productInfo.append(div);

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;
  div.append(productPrice);

  const productName = document.createElement("p");
  productName.innerText = product.name;
  div.append(productName);

  const figure = document.createElement("figure");
  productInfo.append(figure);

  const cart = document.createElement("img");
  cart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  figure.append(cart);

  cardsContainer.append(productCard);
  return productCard;
}

/**
 * Events listeners
 */

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
navbarShoppingCrat.addEventListener("click", toggleShoppingCart);
productDetailExitBtn.addEventListener('click', closeProductDetailContainer);

/**
 * onClick events
 */

function toggleDesktopMenu() {
  checkToSwitchState(shoppingCartContainer);
  checkToSwitchState(productDetailContainer);
  toToggleOnClick(desktopMenu);
}

function toggleMobileMenu() {
  checkToSwitchState(shoppingCartContainer);
  checkToSwitchState(productDetailContainer);
  toToggleOnClick(mobileMenu);
}

function toggleShoppingCart() {
  checkToSwitchState(mobileMenu);
  checkToSwitchState(desktopMenu);
  checkToSwitchState(productDetailContainer);
  toToggleOnClick(shoppingCartContainer);
}

function openProductDetailContainer(){
  checkToSwitchState(mobileMenu);
  checkToSwitchState(desktopMenu);
  checkToSwitchState(shoppingCartContainer);
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailContainer(){
  productDetailContainer.classList.add('inactive');
}

/**
 * Helpers
 */

function toToggleOnClick(element) {
  element.classList.toggle("inactive");
}

function isInactive(element) {
  return element.classList.contains("inactive");
}

function checkToSwitchState(element) {
  if (!isInactive(element)) {
    toToggleOnClick(element);
  }
}