"use strict";

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartDetails = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Table Lamp",
  price: 90,
  image: "./logos/lampara.jpg",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function toggleDesktopMenu() {
  const isShoppingCardClosed =
    shoppingCartDetails.classList.contains("inactive");
  if (!isShoppingCardClosed) {
    shoppingCartDetails.classList.toggle("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isShoppingCardClosed =
    shoppingCartDetails.classList.contains("inactive");
  if (!isShoppingCardClosed) {
    shoppingCartDetails.classList.toggle("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCardDetails() {
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isDesktopMenuClosed || !isMobileMenuClosed) {
    desktopMenu.classList.toggle("inactive");

    mobileMenu.classList.toggle("inactive");
  }
  shoppingCartDetails.classList.toggle("inactive");
}

function renderProducts(data) {
  for (const product of data) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const infoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    infoDiv.append(productPrice, productName);

    const imgContainer = document.createElement("figure");

    const iconAddToCard = document.createElement("img");
    iconAddToCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    imgContainer.appendChild(iconAddToCard);
    productInfo.appendChild(infoDiv);
    productInfo.appendChild(imgContainer);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleShoppingCardDetails);

renderProducts(productList);
