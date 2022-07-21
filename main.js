const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const btnMobileMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
btnMobileMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleAsideProductDetail);

const productList = [];
for (let i = 0; i < 5; i++) {
  productList.push({
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
}
for (let i = 0; i < 5; i++) {
  productList.push({
    name: "Laptop",
    price: 750,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
}
for (let i = 0; i < 5; i++) {
  productList.push({
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
}
for (let i = 0; i < 5; i++) {
  productList.push({
    name: "Laptop",
    price: 750,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
}

renderProducts(productList);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  asideProductDetail.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  asideProductDetail.classList.add("inactive");
}

function toggleAsideProductDetail() {
  asideProductDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

function renderProducts(productList) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.src = product.image;

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    const productName = document.createElement("p");

    productPrice.innerText = "$" + product.price;
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");
    const cartImg = document.createElement("img");

    cartImg.src = "./icons/bt_add_to_cart.svg";

    cardsContainer.appendChild(productCard);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfoFigure.appendChild(cartImg);
  }
}
