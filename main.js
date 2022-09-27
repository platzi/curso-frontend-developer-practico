//desktopMenu
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//aside
const aside = document.querySelector("#shoppingCart");
//mobile selector
const btnIconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//Shopping cart
const shopCartIcon = document.querySelector(".navbar-shopping-cart");
const returnShopCart = document.querySelector(".title-container");
//ProductCard
const cardsContainer = document.querySelector(".cards-container");

//event
menuEmail.addEventListener("click", toggleDesktopMenu);
btnIconMenu.addEventListener("click", toggleMobileMenu);
shopCartIcon.addEventListener("click", toggleCarritoAside);
returnShopCart.addEventListener("click", toggleCarritoAside);

//desktopMenu function
function toggleDesktopMenu() {
  if (aside.classList.contains("inactive")) {
    desktopMenu.classList.toggle("inactive");
  } else {
    aside.classList.add("inactive");
    desktopMenu.classList.remove("inactive");
  }
}

//mobileMenu function

function toggleMobileMenu() {
  if (aside.classList.contains("inactive")) {
    mobileMenu.classList.toggle("inactive");
  } else {
    aside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
  }
}

//aside function

function toggleCarritoAside() {
  if (
    mobileMenu.classList.contains("inactive") &&
    desktopMenu.classList.contains("inactive")
  ) {
    aside.classList.toggle("inactive");
  } else {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.remove("inactive");
  }
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
// 				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// 					alt="">
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
