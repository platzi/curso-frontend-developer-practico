const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".burgerMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconShoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
iconShoppingCart.addEventListener("click", toggleAsideMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}
function toggleAsideMenu() {
  aside.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}
const productList = [
  {
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Compu",
    price: 220,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "iPhone",
    price: 1020,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

productList.map((product) => {
  const productCard = document.createElement("div");
  const img = document.createElement("img");
  const productInfo = document.createElement("div");
  const productInfoContainer = document.createElement("div");
  const productPrice = document.createElement("p");
  const productName = document.createElement("p");
  const productFigure = document.createElement("figure");
  const imgIcon = document.createElement("img");
  productCard.classList.add("product-card");
  productInfo.classList.add("product-info");
  img.setAttribute("src", product.image);
  imgIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");
  productPrice.innerText = "$" + product.price;
  productName.innerText = product.name;

  productCard.append(img, productInfo);
  productInfo.append(productInfoContainer, productFigure);
  productInfoContainer.append(productPrice, productName);
  productFigure.appendChild(imgIcon);
  cardContainer.appendChild(productCard);
});
