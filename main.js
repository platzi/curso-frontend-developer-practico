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
const arrayAllMenu = [
  desktopMenu,
  mobileMenu,
  shoppingCartDetails,
  productDetail,
];

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
productList.push({
  id: "4",
  name: "Table",
  price: 120,
  image:
    "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam assumenda!",
});

/*  HANDLE DROP DOWN */
function closeMenu(element, arrayMenu) {
  const isClosed = element.classList.contains("inactive");
  if (!isClosed) {
    element.classList.add("inactive");
  } else {
    for (let menu of arrayMenu) {
      menu === element
        ? menu.classList.remove("inactive")
        : menu.classList.add("inactive");
    }
  }
}
function closeDetails() {
  productDetail.classList.add("inactive");
}

function showDetails() {
  closeMenu(productDetail, arrayAllMenu);
}

function toggleDesktopMenu() {
  closeMenu(desktopMenu, arrayAllMenu);
}

function toggleMobileMenu() {
  closeMenu(mobileMenu, arrayAllMenu);
}

function toggleShoppingCardDetails() {
  closeMenu(shoppingCartDetails, arrayAllMenu);
}

/* RENDER ELEMENTS */
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
  showDetails();
}

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleShoppingCardDetails);

renderProductList(productList);
