const botonnavEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const botonMenuMobile = document.querySelector(".menu-mobile-button");
const botonCarrito = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseButton = document.querySelector(
  ".product-detail-close"
);
 const productDetailImage = document.querySelector('#product-detail-image');
 const productDetailPrice = document.querySelector('#product-detail-price');
 const productDetailName = document.querySelector('#product-detail-name');
const productDetailDescription = document.querySelector('#product-detail-description');

botonnavEmail.addEventListener("click", toggleDesktopMenu);
botonMenuMobile.addEventListener("click", toggleMobileMenu);
botonCarrito.addEventListener("click", toggleAsideShoppingCart);
productDetailCloseButton.addEventListener("click", closeProductDetailContainer);

function toggleDesktopMenu() {
  const isShoppingCartOpen = !shoppingCart.classList.contains("inactive");
  const isProductDetailOpen =
    !productDetailContainer.classList.contains("inactive");
  if (isShoppingCartOpen || isProductDetailOpen) {
    shoppingCart.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isShoppingCartOpen = !shoppingCart.classList.contains("inactive");
  const isProductDetailOpen =
    !productDetailContainer.classList.contains("inactive");
  if (isShoppingCartOpen || isProductDetailOpen) {
    shoppingCart.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleAsideShoppingCart() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
  const isProductDetailOpen =
    !productDetailContainer.classList.contains("inactive");

  if (isMobileMenuOpen || isDesktopMenuOpen || isProductDetailOpen) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
  }
  shoppingCart.classList.toggle("inactive");
}

function openProductDetailAside(event) {
  
  const objetoSolicitado = productList.find(element => element.image === event.target.src);

  console.log(objetoSolicitado);

  const productName = objetoSolicitado.name;
  const productPrice = objetoSolicitado.price;
  const productImage = objetoSolicitado.image;
  const productDescription = objetoSolicitado.description;

  productDetailImage.setAttribute("src", productImage);
  productDetailName.innerText = productName;
  productDetailPrice.innerText = "$ "+productPrice;
  productDetailDescription.innerText = productDescription;

  const isShoppingCartOpen = !shoppingCart.classList.contains("inactive");
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
  productDetailContainer.classList.remove("inactive");

  if (isShoppingCartOpen || isDesktopMenuOpen) {
    shoppingCart.classList.add("inactive");
    desktopMenu.classList.add("inactive");
  }
}

function closeProductDetailContainer() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
});
productList.push({
  name: "Computer",
  price: 400,
  image:
    "data:image/jpeg;base64,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",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
});
productList.push({
  name: "Xbox 360",
  price: 500,
  image: "https://m.media-amazon.com/images/I/41tO08f3zzL.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
});

function renderProducts(arr) {
  for (product of arr) {

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

    const productInfoFigure = document.createElement("figure");
    const productImgShoppingCart = document.createElement("img");
    productImgShoppingCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgShoppingCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
