const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartDetail = document.querySelector(".shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenuIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleshoppingCartDetail);
cardsContainer.addEventListener("click", toggleProductDetail);
productDetailClose.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCartDetail.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetail.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCartDetail.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetail.classList.add("inactive");
}
function toggleshoppingCartDetail() {
  shoppingCartDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetail.classList.add("inactive");
}
function toggleProductDetail() {
  productDetail.classList.toggle("inactive");
  shoppingCartDetail.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

function generateProductList() {
  let productList = [];
  productList.push({
    name: "Bike",
    price: 7645,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "Super Bike",
    price: 2315,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "TV",
    price: 4567,
    image:
      "https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "PlayStation",
    price: 15496,
    image:
      "https://images.pexels.com/photos/4523013/pexels-photo-4523013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Bike",
    price: 7645,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "Super Bike",
    price: 2315,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "TV",
    price: 4567,
    image:
      "https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "PlayStation",
    price: 15496,
    image:
      "https://images.pexels.com/photos/4523013/pexels-photo-4523013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Bike",
    price: 7645,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "Super Bike",
    price: 2315,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "TV",
    price: 4567,
    image:
      "https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "PlayStation",
    price: 15496,
    image:
      "https://images.pexels.com/photos/4523013/pexels-photo-4523013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });

  return productList;
}

function renderProducts(productList) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = "$" + product.name;

    const productInfoFigure = document.createElement("figure");

    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfoFigure.appendChild(productImgCard);

    cardsContainer.appendChild(productCard);
  }
}
let productList = generateProductList();
renderProducts(productList);
