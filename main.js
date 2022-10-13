const menuEmail = document.querySelector(".navbar-email");
const menuBurgerIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  closeProductDetailAside();

  //si el aside del carrito esta abierto hay que cerrarlo
  if (!isAsideClosed) {
    //si esta abierto este menu procedemos a cerrarlo ya que no pueden estar los dos abiertos al tiempo
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  closeProductDetailAside();
  //si el aside del carrito esta abierto hay que cerrarlo
  if (!isAsideClosed) {
    //si esta abierto este menu procedemos a cerrarlo ya que no pueden estar los dos abiertos al tiempo
    shoppingCartContainer.classList.add("inactive");
  }

  menuMobile.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = menuMobile.classList.contains("inactive");
  const isEmailMenuClosed = desktopMenu.classList.contains("inactive");
  
  closeProductDetailAside();
  //si el mobile menu o el menu desktop esta abierto hay que cerrarlo
  if (!isMobileMenuClosed) {
    //si esta abierto este menu procedemos a cerrarlo ya que no pueden estar los dos abiertos al tiempo
    menuMobile.classList.add("inactive");
  }

  if (!isEmailMenuClosed) {
    //si esta abierto este menu procedemos a cerrarlo ya que no pueden estar los dos abiertos al tiempo
    desktopMenu.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  // cerramos todos las demas
  shoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  menuMobile.classList.add("inactive");

  productDetailContainer.classList.remove("inactive");
  

}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pc",
  price: 2000,
  image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F8siEmVqup0tDatsFiQSaQHaFj%26pid%3DApi&f=1&ipt=ef0085dee9142721df27db38549a31d4c2602402342ec3ff87f4624138d259f4&ipo=images",
});

productList.push({
  name: "Pc",
  price: 2000,
  image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F8siEmVqup0tDatsFiQSaQHaFj%26pid%3DApi&f=1&ipt=ef0085dee9142721df27db38549a31d4c2602402342ec3ff87f4624138d259f4&ipo=images",
});

productList.push({
  name: "Audifonos",
  price: 2000,
  image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.5LHWpShSiPWoYEEQr8HbPwHaGw%26pid%3DApi&f=1&ipt=96a6780eebf7f5bcb4650879e1a8fad7820e626b5a88b399b809995d12cb5865&ipo=image",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Audifonos",
  price: 2000,
  image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.5LHWpShSiPWoYEEQr8HbPwHaGw%26pid%3DApi&f=1&ipt=96a6780eebf7f5bcb4650879e1a8fad7820e626b5a88b399b809995d12cb5865&ipo=image",
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Audifonos",
  price: 2000,
  image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.5LHWpShSiPWoYEEQr8HbPwHaGw%26pid%3DApi&f=1&ipt=96a6780eebf7f5bcb4650879e1a8fad7820e626b5a88b399b809995d12cb5865&ipo=image",
});

productList.push({
  name: "Pc",
  price: 2000,
  image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F8siEmVqup0tDatsFiQSaQHaFj%26pid%3DApi&f=1&ipt=ef0085dee9142721df27db38549a31d4c2602402342ec3ff87f4624138d259f4&ipo=images",
});

function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
