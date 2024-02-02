const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector("#productDetail");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector("#productDetail");

productDetailCloseIcon.addEventListener("click", () => {
  productDetailContainer.classList.add("inactive");
});

menuEmail.addEventListener("click", () => {
  desktopMenu.classList.toggle("inactive");
});

burguerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("inactive");  
});

carritoIcon.addEventListener("click", () => {
  shoppingCartContainer.classList.toggle("inactive");
  if (shoppingCartContainer.classList.contains("inactive")) {
    carritoIcon.style.color = "#000";
  }
});

function openProductDetailAside() {
  const productDetailAside = document.querySelector("#productDetailAside");
  productDetailAside.classList.remove("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 100,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "TV",
  price: 100,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Display",
  price: 100,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImage = document.createElement("img");
  productImage.setAttribute("src", product.image);
  productImage.addEventListener("click", openProductDetailAside);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");
  // productInfoDiv.classList.add("product-infoDiv");

  const productName = document.createElement("p");
  productName.innerText = product.name;

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  const productInfoFigure = document.createElement("figure");

  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCart);
  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImage);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
}
