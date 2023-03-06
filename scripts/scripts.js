const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIconMobile = document.querySelector(".menuHamMobile");
const mobileMenu = document.querySelector(".mobile-menu");
const minicarIcon = document.querySelector(".navbar-shopping-cart");
const minicarProductDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIconMobile.addEventListener("click", toggleMobileMenu);
minicarIcon.addEventListener("click", toggleMinicarIcon);

function toggleDesktopMenu() {
  minicarProductDetail.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  minicarProductDetail.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}
function toggleMinicarIcon() {
  mobileMenu.classList.add("inactive");
  minicarProductDetail.classList.toggle("inactive");
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
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computer",
  price: 320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(productCategories) {
  for (product of productCategories) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const containerPriceAndNameProduct = document.createElement("div");

    const priceProduct = document.createElement("p");
    priceProduct.classList.add("priceProduct");
    priceProduct.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.classList.add("productName");
    productName.innerText = product.name;

    const containerIconFigure = document.createElement("figure");

    const iconFigure = document.createElement("img");
    iconFigure.setAttribute("src", "../icons/bt_add_to_cart.svg");

    containerIconFigure.appendChild(iconFigure);

    containerPriceAndNameProduct.appendChild(priceProduct);
    containerPriceAndNameProduct.appendChild(productName);

    productInfo.appendChild(containerPriceAndNameProduct);
    productInfo.appendChild(containerIconFigure);

    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList)