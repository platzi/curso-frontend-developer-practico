const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const burguerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartMenu = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

email.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCard);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCartMenu.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartMenu.classList.add("inactive");
}

function toggleShoppingCard() {
  shoppingCartMenu.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
}

const products = [];
products.push({
  name: "Bike",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 120,
});
products.push({
  name: "TV",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 1200,
});
products.push({
  name: "Doll",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 50,
});

renderProduct(products);

function renderProduct(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productImg = document.createElement("img");
    productImg.src = product.image;

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productTextInfo = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = `$ ${product.price}`;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productAddContainer = document.createElement("figure");
    const productAddIcon = document.createElement("img");
    productAddIcon.src = "./icons/bt_add_to_cart.svg";

    // * Append
    productAddContainer.appendChild(productAddIcon);
    productTextInfo.append(productPrice, productName);
    productInfo.append(productAddContainer, productTextInfo);
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}
