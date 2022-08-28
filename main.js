const navbar_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const asideCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navbar_email.addEventListener("click", toggleDesktopMenu);
shoppingCart.addEventListener("click", toggleShoppingAside);
menuMobile.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktop_menu.classList.toggle("inactive");
  asideCart.classList.add("inactive");
}

function toggleMobileMenu() {
  asideCart.classList.add("inactive");
  mobile_menu.classList.toggle("inactive");
}

function toggleShoppingAside() {
  asideCart.classList.toggle("inactive");
  mobile_menu.classList.add("inactive");
  desktop_menu.classList.add("inactive");
}

/* ----------MAQUETACIÓN HTML EN JS DE LOS PRODUCTOS EN VENTA---------- */
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Plantas",
  price: 220,
  image:
    "https://www.zankyou.es/images/mag-card-c/510/4925/878/623/-/br/wp-content/uploads/2017/01/z-le-Arthur-Foschini1.jpg",
});
productList.push({
  name: "Aves",
  price: 3320,
  image:
    "https://sumedico.blob.core.windows.net/images/2021/01/14/curiosidadesdelosperiquitosaustralianos-focus-0-0.5-640-384.jpg",
});

function renderProducts(arrProductos) {
  for (product of arrProductos) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);

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

    productInfoDiv.append(productPrice, productName);
    productInfoFigure.appendChild(productImgCart);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImage, productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
