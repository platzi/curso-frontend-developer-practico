const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Screen",
  price: 170,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Sofa",
  price: 80,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burgerMenu = document.querySelector("#burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector("#shopping-cart-container");

const cardsContainer = document.querySelector(".cards-container");

displayProducts(productList);

const productCards = document.querySelectorAll(".product-card");
const asideDetail = document.querySelector("#product-detail");
const closeDetail = document.querySelector(".product-detail-close");

navbarEmail.addEventListener("click", () => {
  asideDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
});

burgerMenu.addEventListener("click", () => {
  asideDetail.classList.add("inactive");
  productDetail.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
});

menuCart.addEventListener("click", () => {
  asideDetail.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetail.classList.toggle("inactive");
});

function displayProducts(arr) {
  for (product of arr) {
    const container = document.createElement("div");
    container.className = "product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const productInfo = document.createElement("div");
    productInfo.className = "product-info";

    const infoText = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerHTML = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerHTML = product.name;

    const iconContainer = document.createElement("figure");
    const icon = document.createElement("img");
    icon.src = "./icons/bt_add_to_cart.svg";

    infoText.append(productPrice, productName);
    iconContainer.appendChild(icon);
    productInfo.append(infoText, iconContainer);

    container.append(img, productInfo);

    cardsContainer.append(container);
  }
}

closeDetail.addEventListener("click", () => {
  asideDetail.classList.add("inactive");
});

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    desktopMenu.classList.add("inactive");
    productDetail.classList.add("inactive");
    asideDetail.classList.toggle("inactive");
  });
});
