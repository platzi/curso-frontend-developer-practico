const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCardContainer = document.querySelector(
  "#shopping-card-container"
);
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#product-detail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarroAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);
function toggleDesktopMenu() {
  const isAsideClosed = shoppingCardContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCardContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive"); //classList.toggle permite poner o quitar la clase inactive dependiendo si ya la tiene o no
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCardContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCardContainer.classList.add("inactive");
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive"); //classList.toggle permite poner o quitar la clase inactive dependiendo si ya la tiene o no
}

function toggleCarroAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCardContainer.classList.toggle("inactive"); // classList.toggle permite poner o quitar la clase inactive dependiendo si ya la tiene o no
}

function openProductDetailAside() {
  shoppingCardContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: 800,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Laptop",
  price: 1200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Table",
  price: 80,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Chair",
  price: 20,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
