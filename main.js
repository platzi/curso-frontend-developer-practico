"use strict";

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartDetails = document.querySelector("#shoppingCardDetail");
const cardsContainer = document.querySelector(".cards-container");
const closeProductDetails = document.querySelector(".product-detail-close");
const productDetail = document.querySelector("#productDetail");

let productAdded = [];
const productList = [];
productList.push({
  id: "1",
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa laboriosam, pariatur omnis ullam ut similique molestias quos beatae voluptatem nulla odio, dolorum unde possimus accusantium praesentium dignissimos voluptatum magnam assumenda!",
});
productList.push({
  id: "2",
  name: "Table Lamp",
  price: 90,
  image: "./logos/lampara.jpg",
  description:
    "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});
productList.push({
  id: "3",
  name: "Chair",
  price: 65,
  image: "./logos/chair.jpg",
  description:
    "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

function closeDetails() {
  productDetail.classList.add("inactive");
}

function showDetails() {
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isShoppingCardClosed =
    shoppingCartDetails.classList.contains("inactive");
  if (!isDesktopMenuClosed || !isMobileMenuClosed || !isShoppingCardClosed) {
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
    shoppingCartDetails.classList.add("inactive");
  }
  productDetail.classList.remove("inactive");
}

function toggleDesktopMenu() {
  const isShoppingCardClosed =
    shoppingCartDetails.classList.contains("inactive");

  if (!isShoppingCardClosed) {
    shoppingCartDetails.classList.toggle("inactive");
  }
  closeDetails();
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
  const detailsClosed = productDetail.classList.contains("inactive");
  if (!isDesktopMenuClosed || !isMobileMenuClosed || !detailsClosed) {
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
  }
  shoppingCartDetails.classList.toggle("inactive");
}

function renderProductList(data) {
  data.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.setAttribute("alt", product.description);
    productImg.addEventListener("click", () => {
      renderProductDetail(product);
    });

    productImg.addEventListener("click", () => console.log(product.name));

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const infoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = `${product.price} €`;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    infoDiv.append(productPrice, productName);

    const imgContainer = document.createElement("figure");

    const iconAddToCard = document.createElement("img");
    iconAddToCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    iconAddToCard.title = "añadir artículo";

    imgContainer.appendChild(iconAddToCard);
    productInfo.appendChild(infoDiv);
    productInfo.appendChild(imgContainer);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  });
}
function sayHello(name) {
  console.log("hi" + name.price);
}
function renderProductDetail(product) {
  let html = ` <div class="product-detail-close">

  <img src="./icons/icon_close.png" alt="close" onClick= closeDetails()>
</div>
<img src=${product.image} alt=${product.description}>
<div class="product-detail-info">
  <p>${product.price} €</p>
  <p>${product.name}</p>
  <p>${product.description}</p>
  <button class="primary-button add-to-cart-button">
    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    Add to cart
  </button>
</div>`;

  productDetail.innerHTML = html;

  /*  const divClose = document.createElement("div");
  divClose.classList.add("product-detail-close");
  divClose.addEventListener("click", closeDetails);

  const closeIcon = document.createElement("img");
  closeIcon.setAttribute("src", "./icons/icon_close.png");
  closeIcon.alt = "close icon";
  closeIcon.title = "Close";

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  productImg.alt = product.description;

  const divInfo = document.createElement("div");
  divInfo.classList.add("product-detail-info");

  const priceInfo = document.createElement("p");
  priceInfo.innerText = `${product.price} €`;
  const nameInfo = document.createElement("p");
  nameInfo.innerText = `${product.name}`;
  const description = document.createElement("P");
  description.innerText =
    "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.";

  const buttonAdd = document.createElement("button");
  buttonAdd.classList.add("primary-button");
  buttonAdd.classList.add("add-to-cart-button");
  buttonAdd.alt = "add to shopping cart";
  const imgButtonAdd = document.createElement("img");
  imgButtonAdd.setAttribute = ("src", "./icons/bt_add_to_cart.svg");

  buttonAdd.appendChild(imgButtonAdd);
  buttonAdd.innerText = "Add to cart";

  divClose.appendChild(closeIcon);
  divInfo.append(priceInfo, nameInfo, description, buttonAdd);
  productDetail.append(divClose, productImg, divInfo);
 */
  showDetails();
}

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleShoppingCardDetails);
//renderProductDetail();
renderProductList(productList);
