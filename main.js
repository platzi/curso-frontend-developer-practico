const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const aside = document.querySelector(".product-detail");
const productDetailContainer = document.querySelector(".product-detail-mini");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  if (!aside.classList.contains("inactive")) {
    closeMenus(aside);
  } else if (!productDetailContainer.classList.contains("inactive")) {
    closeMenus(productDetailContainer);
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  if (!aside.classList.contains("inactive")) {
    closeMenus(aside);
  } else if (!productDetailContainer.classList.contains("inactive")) {
    closeMenus(productDetailContainer);
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  if (!desktopMenu.classList.contains("inactive")) {
    closeMenus(desktopMenu);
  } else if (!mobileMenu.classList.contains("inactive")) {
    closeMenus(mobileMenu);
  } else if (!productDetailContainer.classList.contains("inactive")) {
    closeMenus(productDetailContainer);
  }

  aside.classList.toggle("inactive");
}

function openProductDetailAside() {
  if (!desktopMenu.classList.contains("inactive")) {
    closeMenus(desktopMenu);
  } else if (!mobileMenu.classList.contains("inactive")) {
    closeMenus(mobileMenu);
  } else if (!aside.classList.contains("inactive")) {
    closeMenus(aside);
  }

  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  closeMenus(productDetailContainer);
}

function closeMenus(close) {
  close.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Computadora",
  price: 620,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    document.createElement;

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = `$${product.price}`;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);
  }
}

renderProducts(productList);
