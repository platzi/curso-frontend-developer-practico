const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenuToggler = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailsContainer = document.querySelector("#product-detail");

function toggleDesktopMenu() {
  const isShoppingCartMenuOn =
    !shoppingCartContainer.classList.contains("inactive");
  if (isShoppingCartMenuOn) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isShoppingCartMenuOn =
    !shoppingCartContainer.classList.contains("inactive");
  if (isShoppingCartMenuOn) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}
function toggleShoppingCartMenu() {
  const isMobileMenuOn = !mobileMenu.classList.contains("inactive");
  const isProductDetailOn =
    !productDetailsContainer.classList.contains("inactive");
  if (isMobileMenuOn) {
    mobileMenu.classList.add("inactive");
  }

  if (isProductDetailOn) {
    productDetailsContainer.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}
function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailsContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetailsContainer.classList.add("inactive");
}
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
    productPrice.innerText = `$${product.price}`;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfoDiv.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Electric Bike",
  price: 320,
  image:
    "https://images.pexels.com/photos/11074451/pexels-photo-11074451.jpeg?cs=srgb&dl=pexels-gonzalo-carlos-novillo-lapeyra-11074451.jpg&fm=jpg&_gl=1*q9m55*_ga*ODgxOTI3OTIwLjE2NjYyMjg5MzQ.*_ga_8JE65Q40S6*MTY2NzQxNDU3NS4zLjEuMTY2NzQxNDYwNi4wLjAuMA..",
});
productList.push({
  name: "Carbon Fiber Bike",
  price: 520,
  image:
    "https://images.pexels.com/photos/11074447/pexels-photo-11074447.jpeg?cs=srgb&dl=pexels-gonzalo-carlos-novillo-lapeyra-11074447.jpg&fm=jpg&_gl=1*nzptz9*_ga*ODgxOTI3OTIwLjE2NjYyMjg5MzQ.*_ga_8JE65Q40S6*MTY2NzQxNDU3NS4zLjEuMTY2NzQxNDY2MC4wLjAuMA..",
});

renderProducts(productList);
menuEmail.addEventListener("click", toggleDesktopMenu);
iconMenuToggler.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleShoppingCartMenu);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);
