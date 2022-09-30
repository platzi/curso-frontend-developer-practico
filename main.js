//desktopMenu
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//aside
const aside = document.querySelector("#shoppingCart");
//mobile selector
const btnIconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//Shopping cart
const productDetailIconClose = document.querySelector(".product-detail-close");
const shopCartIcon = document.querySelector(".navbar-shopping-cart");
const returnShopCart = document.querySelector(".title-container");
//ProductCard
const cardsContainer = document.querySelector(".cards-container");
//productDetailContainer
const productDetailContainer = document.querySelector("#product-detail");

//event
menuEmail.addEventListener("click", toggleDesktopMenu);
btnIconMenu.addEventListener("click", toggleMobileMenu);
shopCartIcon.addEventListener("click", toggleCarritoAside);
returnShopCart.addEventListener("click", toggleCarritoAside);
productDetailIconClose.addEventListener("click", closeProductDetailAside);

//open/close desktopMenu function
function toggleDesktopMenu() {
  if (
    aside.classList.contains("inactive") &&
    productDetailContainer.classList.contains("inactive")
  ) {
    desktopMenu.classList.toggle("inactive");
  } else {
    aside.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    desktopMenu.classList.remove("inactive");
  }
}

//open/close mobileMenu function

function toggleMobileMenu() {
  if (
    aside.classList.contains("inactive") &&
    productDetailContainer.classList.contains("inactive")
  ) {
    mobileMenu.classList.toggle("inactive");
  } else {
    aside.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    mobileMenu.classList.remove("inactive");
  }
}

//open/close aside-carrito function

function toggleCarritoAside() {
  if (
    mobileMenu.classList.contains("inactive") && //mobile
    desktopMenu.classList.contains("inactive") && //desktop
    productDetailContainer.classList.contains("inactive")
  ) {
    aside.classList.toggle("inactive"); //aside
  } else {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    aside.classList.remove("inactive");
  }
}

//open/close productDetail function

function openProductDetailAside() {
  if (
    aside.classList.contains("inactive") && //aside
    desktopMenu.classList.contains("inactive") //desktop
  ) {
    productDetailContainer.classList.remove("inactive");
  } else {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.add("inactive"); //aside
    productDetailContainer.classList.remove("inactive");
  }
}

//close productDetailWindow
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

//product list

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike2",
  price: 150,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike3",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

// <div class="product-card">
// 				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// 				<div class="product-info">
// 					<div>
// 						<p>$120,00</p>
// 						<p>Bike</p>
// 					</div>
// 					<figure>
// 						<img src="./icons/bt_add_to_cart.svg" alt="">
// 					</figure>
// 				</div>
// 			</div>

//creando productos del carrito con manipulación del DOM
for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  //interación entre todos los componentes
  productImg.addEventListener("click", openProductDetailAside);

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
  const productInfoFigureImg = document.createElement("img");
  productInfoFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productInfoFigureImg);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
}
