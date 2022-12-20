const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burgerMenu = document.querySelector("#burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

navbarEmail.addEventListener("click", () => {
  desktopMenu.classList.toggle("inactive");
});

burgerMenu.addEventListener("click", () => {
  productDetail.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
});

menuCart.addEventListener("click", () => {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetail.classList.toggle("inactive");
});

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

displayProducts(productList);