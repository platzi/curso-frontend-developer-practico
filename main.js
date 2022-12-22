const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cart = document.querySelector(".navbar-shopping-cart");
const ShoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
cart.addEventListener("click", toggleShoppingCart);
productDetailClose.addEventListener("click", closeProductDetail);

function toggleDesktopMenu() {
  productDetailContainer.classList.add("inactive");
  ShoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  productDetailContainer.classList.add("inactive");
  ShoppingCartContainer.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
  productDetailContainer.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  ShoppingCartContainer.classList.toggle("inactive");
}

function openProductDetail() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  ShoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetail() {
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
  name: "Pantalla",
  price: 240,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Computador",
  price: 540,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener("click", openProductDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
