const $ = (element) => document.querySelector(element);
const email = $(".navbar-email");
const desktopMenu = $(".desktop-menu");
const menu = $(".menu");
const mobileMenu = $(".mobile-menu");
const btnCart = $(".navbar-shopping-cart");
const shoppingCartContainer = $("#shoppingCartContainer");
const cardContainer = $(".cards-container");
const productDetail = $("#productDetail");
console.log({ menu });

email.addEventListener("click", toggleDesktop);
menu.addEventListener("click", toggleMenu);
btnCart.addEventListener("click", toggleCart);

function toggleDesktop() {
  let isMenuCartClosed = shoppingCartContainer.classList.contains("inactive");
  let productDetailClosed = productDetail.classList.contains("inactive");
  if (!isMenuCartClosed) {
    shoppingCartContainer.classList.toggle("inactive");
  }
  if (!productDetailClosed) {
    productDetail.classList.toggle("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMenu() {
  let isMenuCartClosed = shoppingCartContainer.classList.contains("inactive");
  let productDetailClosed = productDetail.classList.contains("inactive");
  if (!isMenuCartClosed) {
    shoppingCartContainer.classList.toggle("inactive");
  }
  if (!productDetailClosed) {
    productDetail.classList.toggle("inactive");
  }
  mobileMenu.classList.toggle("slide-right-menu");
}
function toggleCart() {
  let isMobileMenuClosed = !mobileMenu.classList.contains("slide-right-menu");
  let desktopMenuClosed = desktopMenu.classList.contains("inactive");
  let productDetailClosed = productDetail.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle("slide-right-menu");
  }
  if (!desktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }
  if (!productDetailClosed) {
    productDetail.classList.toggle("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: "$100",
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
  name: "Scooter",
  price: "$200",
  image:
    "https://images.unsplash.com/photo-1597260491619-bab87197869f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
});
productList.push({
  name: "Car",
  price: "$300",
  image:
    "https://images.unsplash.com/photo-1605475300127-0a31e8273bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1807&q=80",
});
productList.push({
  name: "Motorcycle",
  price: "$400",
  image:
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
});
productList.push({
  name: "Truck",
  price: "$500",
  image:
    "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80",
});
productList.push({
  name: "Boat",
  price: "$600",
  image:
    "https://images.unsplash.com/photo-1563296291-14f26f10c20f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
});
productList.push({
  name: "Bike",
  price: "$100",
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
  name: "Scooter",
  price: "$200",
  image:
    "https://images.unsplash.com/photo-1597260491619-bab87197869f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
});
productList.push({
  name: "Car",
  price: "$300",
  image:
    "https://images.unsplash.com/photo-1605475300127-0a31e8273bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1807&q=80",
});
productList.push({
  name: "Motorcycle",
  price: "$400",
  image:
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
});
productList.push({
  name: "Truck",
  price: "$500",
  image:
    "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80",
});
productList.push({
  name: "Boat",
  price: "$600",
  image:
    "https://images.unsplash.com/photo-1563296291-14f26f10c20f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const div = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;
    div.appendChild(productPrice);
    div.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productInfoFigureImg = document.createElement("img");
    productInfoFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productInfoFigureImg);
    productInfo.appendChild(div);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
  }
}
renderProducts(productList);
