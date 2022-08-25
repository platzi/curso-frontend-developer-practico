const menuEmail = document.querySelector(".navbar-email");
const burgerMenuIcon = document.querySelector("#burger-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCarrito = document.querySelector("#shopping-cart-container");
const productCardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#product-detail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const cartBackButton = document.querySelector(".title-container");

function toogleMenus(e) {
  const menuType = e.target.id;
  switch (menuType) {
    case "navbar-menu-opener":
      desktopMenu.classList.toggle("inactive");
      break;
    case "burger-menu":
      mobileMenu.classList.toggle("inactive");
      break;
  }

  if (!asideCarrito.classList.contains("inactive")) {
    asideCarrito.classList.add("inactive");
  }
}

function toggleCarritoAside() {
  if (
    !mobileMenu.classList.contains("inactive") ||
    !desktopMenu.classList.contains("inactive") ||
    !productDetailContainer.classList.contains("inactive")
  ) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
  }

  asideCarrito.classList.toggle("inactive");
}

function closeCart() {
  asideCarrito.classList.add("inactive");
}

function openProductDetailsAside() {
  productDetailContainer.classList.remove("inactive");
  asideCarrito.classList.add("inactive");
}

function productDetailClose() {
  productDetailContainer.classList.add("inactive");

  if (
    !mobileMenu.classList.contains("inactive") ||
    !desktopMenu.classList.contains("inactive") ||
    !productDetailContainer.classList.contains("inactive") ||
    !asideCarrito.classList.contains("inactive")
  ) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    asideCarrito.classList.add("inactive");
  }
}

menuEmail.addEventListener("click", toogleMenus);
burgerMenuIcon.addEventListener("click", toogleMenus);
carritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", productDetailClose);
cartBackButton.addEventListener("click", closeCart);

const productList = [
  {
    img:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "1000",
    name: "Bike",
  },
  {
    img:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "190",
    name: "Other Bike",
  },
  {
    img:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "100",
    name: "An Other Bike",
  },
  {
    img:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "100",
    name: "An Other Bike",
  },
];

function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.img);
    img.addEventListener("click", openProductDetailsAside);

    const productInfo = document.createElement("product-info");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");

    const productCartIcon = document.createElement("img");
    productCartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productCartIcon);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    productCardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
