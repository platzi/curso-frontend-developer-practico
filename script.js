const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuEmail = document.querySelector(".navbar-email");
const barMenu = document.querySelector(".menu");
const carButton = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const closeDetailIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
barMenu.addEventListener("click", toggleMobileMenu);
carButton.addEventListener("click", toggleCarAside);
closeDetailIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  if (!shoppingCartContainer.classList.contains("inactive"))
    shoppingCartContainer.classList.toggle("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  if (!shoppingCartContainer.classList.contains("inactive")) {
    shoppingCartContainer.classList.toggle("inactive");
  }
}
function toggleCarAside() {
  shoppingCartContainer.classList.toggle("inactive");
  if (!mobileMenu.classList.contains("inactive"))
    mobileMenu.classList.toggle("inactive");
  if (!desktopMenu.classList.contains("inactive"))
    desktopMenu.classList.toggle("inactive");
}
function openProductDetailAside() {
  productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push(
  {
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Seat",
    price: 300,
    image: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
  },
  {
    name: "Tennis Montain Bike",
    price: 2200,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
  },
  {
    name: "Sunglasses",
    price: 800,
    image:
      "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
  },
  {
    name: "Bicycle seat bag",
    price: 876,
    image: "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg",
  }
);

const cardsContainer = document.querySelector(".cards-container");

for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const img = document.createElement("img");
  img.setAttribute("src", product.image);
  img.addEventListener("click", openProductDetailAside);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  const productName = document.createElement("p");
  productName.innerText = product.name;

  const productInfoFigure = document.createElement("figure");
  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCart);

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(img);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
}
