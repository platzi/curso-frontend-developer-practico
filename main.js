const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const sandwichMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".order-details");
const cardsContainer = document.querySelector(".cards-container");

const productList = [];

menuEmail.addEventListener("click", toggleDesktopMenu);
sandwichMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
  const shoppingCartClosed = shoppingCart.classList.contains("inactive");

  if (!shoppingCartClosed) {
    shoppingCart.classList.toggle("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const shoppingCartClosed = shoppingCart.classList.contains("inactive");

  if (!shoppingCartClosed) {
    shoppingCart.classList.toggle("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
  const mobileMenuClosed = mobileMenu.classList.contains("inactive");
  const desktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!mobileMenuClosed) {
    mobileMenu.classList.toggle("inactive");
  } else if (!desktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }

  shoppingCart.classList.toggle("inactive");
}

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "iPhone",
  price: 900,
  image:
    "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Laptop",
  price: 1500,
  image:
    "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "SmartWatch",
  price: 50,
  image:
    "https://images.pexels.com/photos/518419/pexels-photo-518419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Headphones",
  price: 30,
  image:
    "https://images.pexels.com/photos/844923/pexels-photo-844923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Tablet",
  price: 300,
  image:
    "https://images.pexels.com/photos/3949101/pexels-photo-3949101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Smart TV",
  price: 900,
  image:
    "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

for (product in productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImage = document.createElement("img");
  productImage.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const div = document.createElement("div");

  const price = document.createElement("p");
  price.innerText = "$" + product.price;
  const itemName = document.createElement("p");
  itemName.innerText = product.name;

  const figureIcon = document.createElement("figure");
  const addToCartIcon = document.createElement("img");
  addToCartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");

  figureIcon.appendChild(addToCartIcon);

  div.appendChild(price);
  div.appendChild(itemName);

  productInfo.appendChild(div);
  productInfo.appendChild(figureIcon);

  productCard.appendChild(productImage);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
}
