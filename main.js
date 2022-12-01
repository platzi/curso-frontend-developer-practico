const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const BurgerBtn = document.querySelector(".menu");
const BurgerMenu = document.querySelector(".mobile-menu");
const ShoppingBtn = document.querySelector(".navbar-shopping-cart");
const shoppingMenu = document.querySelector("#allShopping");
const containerCards = document.querySelector(".cards-container");
const productDetail = document.querySelector("#product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

email.addEventListener("click", toggleDesktopMenu);
BurgerBtn.addEventListener("click", toggleMobileMenu);
ShoppingBtn.addEventListener("click", toggleShoppingMenu);
productDetailClose.addEventListener("click", closeProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  let DesktopMenuOpen = shoppingMenu.classList.contains("inactive");
  let closeDetailPProduct = productDetail.classList.contains("inactive");
  if (!DesktopMenuOpen) {
    shoppingMenu.classList.add("inactive");
  }
  if (!closeDetailPProduct) {
    productDetail.classList.add("inactive");
  }
}
function toggleMobileMenu() {
  BurgerMenu.classList.toggle("inactive");
  let BurgerOpen = shoppingMenu.classList.contains("inactive");
  let closeProductDetail;
  if (!BurgerOpen) {
    shoppingMenu.classList.add("inactive");
  }
  if (!closeProductDetail) {
    productDetail.classList.add("inactive");
  }
}
function toggleShoppingMenu() {
  shoppingMenu.classList.toggle("inactive");
  let ShopOpen = BurgerMenu.classList.contains("inactive");
  let ShopOpenforDesk = desktopMenu.classList.contains("inactive");
  let closeDetailProduct = productDetail.classList.contains("inactive");
  if (!ShopOpenforDesk) {
    desktopMenu.classList.add("inactive");
  }
  if (!ShopOpen) {
    BurgerMenu.classList.add("inactive");
  }
  if (!closeDetailProduct) {
    productDetail.classList.add("inactive");
  }
}
function openProductDetail() {
  productDetail.classList.remove("inactive");
  let closeShopping = shoppingMenu.classList.contains("inactive");
  let closeDeskTop = desktopMenu.classList.contains("inactive");
  if (!closeShopping) {
    shoppingMenu.classList.add("inactive");
  }
  if (!closeDeskTop) {
    desktopMenu.classList.add("inactive");
  }
}
function closeProductDetail() {
  productDetail.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: "120",
  addShopping:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Phone",
  price: "820",
  addShopping:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: "320",
  addShopping:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Stereo",
  price: "420",
  addShopping:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProduct(arr) {
  for (product of arr) {
    const divCard = document.createElement("div");
    divCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.addShopping);
    divCard.appendChild(img);
    img.addEventListener("click", openProductDetail);

    const divInfo = document.createElement("div");
    divInfo.classList.add("product-info");
    divCard.appendChild(divInfo);

    const divOnly = document.createElement("div");
    divInfo.appendChild(divOnly);

    const productPrice = document.createElement("p");
    productPrice.innerHTML = "$" + product.price;
    divOnly.appendChild(productPrice);

    const productName = document.createElement("p");
    productName.innerHTML = product.name;
    divOnly.appendChild(productName);

    const figure = document.createElement("figure");
    divInfo.appendChild(figure);

    const icon = document.createElement("img");
    icon.setAttribute("src", "./icons/bt_add_to_cart.svg");
    figure.appendChild(icon);

    containerCards.appendChild(divCard);
  }
}
renderProduct(productList);
