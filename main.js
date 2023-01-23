const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  //   desktopMenu.className === "desktop-menu inactive"
  //     ? (desktopMenu.className = "desktop-menu")
  //     : (desktopMenu.className = "desktop-menu inactive");

  isAsideOpen = !shoppingCartContainer.classList.contains("inactive");

  if (isAsideOpen) {
    shoppingCartContainer.classList.toggle("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  isAsideOpen = !shoppingCartContainer.classList.contains("inactive");
  isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (isAsideOpen) {
    shoppingCartContainer.classList.toggle("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Zapatillas",
  price: 120,
  image:
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSz4R_-XkWOdkK83csV5OxagRiu0qJz8qoPwyaljpSET_5rA9yhHZQQVtP2eyJLmml0tPQ_qkSG&usqp=CAc",
});

productList.push({
  name: "Casco",
  price: 80,
  image:
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSXzeqYNCxY42q7WUeaHaR1m96xFIPTxNfmjcMwfsPE9jega644vJPdqS-8wjqHldq5QIPWKjWbz5k&usqp=CAc",
});

productList.push({
  name: "Guantes",
  price: 25,
  image:
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxFYiy47-T3e517X89eS4XiFp1RurBC_anTyGXvHWWlbsxXB0SBLIPppjF9vAeaV2hSunX_2ySFgk&usqp=CAc",
});

function renderProducts(productList) {
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
    const productInfoFigure = document.createElement("figure");
    productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
  }
}

renderProducts(productList);
