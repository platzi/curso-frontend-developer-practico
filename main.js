const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburger.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toogleCarritoAside);
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
}
function toogleCarritoAside() {
  productDetail.classList.toggle("inactive");
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
}
const productList = [];
productList.push(
  {
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Pantalla",
    price: 100,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Teclado",
    price: 40,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }
);
const renderProducts = (array) => {
  for (product of array) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImge = document.createElement("img");
    productImge.setAttribute("src", product.img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoDiv = document.createElement("div");
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImge);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
};

renderProducts(productList);
