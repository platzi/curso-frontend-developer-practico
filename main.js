var [menuEmail] = document.getElementsByClassName("navbar-email");
var [desktopMenu] = document.getElementsByClassName("desktop-menu");
var menuHamIcon = document.querySelector(".menu");
var mobileMenu = document.querySelector(".mobile-menu");
var menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
var shoppingCardContainer = document.getElementById("shoppingCartContainer");
var productDetailContainer = document.getElementById("productDetail");
var [productDetailClose] = document.getElementsByClassName(
  "product-detail-close"
);

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailClose.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCardContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCardContainer.classList.add("inactive");
  }
  closeProductDetailAside();
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCardContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCardContainer.classList.add("inactive");
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailContainerClosed =
    productDetailContainer.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  if (!isProductDetailContainerClosed) {
    productDetailContainer.classList.add("inactive");
  }
  shoppingCardContainer.classList.toggle("inactive");
}

function openProductDetailtAside() {
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCardContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

var productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(list) {
  var cardsContainer = document.querySelector(".cards-container");

  list.forEach(function (prod) {
    var productCard = document.createElement("div");
    productCard.classList.add("product-card");

    var image = document.createElement("img");
    image.setAttribute("src", prod.image);
    image.setAttribute("alt", "");

    image.addEventListener("click", openProductDetailtAside);

    var productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    var prodData = document.createElement("div");
    var priceValue = prod.price.toFixed("2").replace(".", ",");
    var price = document.createElement("p");
    price.innerText = `$${priceValue}`;

    var name = document.createElement("p");
    name.innerText = prod.name;

    var figure = document.createElement("figure");
    var addToCartIcon = document.createElement("img");
    addToCartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");
    addToCartIcon.setAttribute("alt", "");

    cardsContainer.appendChild(productCard);

    productCard.appendChild(image);
    productCard.appendChild(productInfo);

    productInfo.appendChild(prodData);
    productInfo.appendChild(figure);

    prodData.appendChild(price);
    prodData.appendChild(name);

    figure.appendChild(addToCartIcon);
  });
}

renderProducts(productList);
