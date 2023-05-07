const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHam = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carroIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const container = document.querySelector(".container");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");
const productDetailName = document.querySelector(".productDetailName");
const productDetailPrice = document.querySelector(".productDetailPrice");
const productDetailImg = document.querySelector(".productDetailImg");

menuEmail.addEventListener("click", toggleMenuDesktop);
menuHam.addEventListener("click", toggleMobileMenu);
carroIcon.addEventListener("click", productDetails);
container.addEventListener("click", closeAllMenus);
productDetailClose.addEventListener("click", closeProductDetail);

function toggleMenuDesktop(event) {
  event.stopPropagation();
  const isProducDetailsClosed =
    shoppingCartContainer.classList.contains("inactive");
  if (!isProducDetailsClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  menuDesktop.classList.toggle("slide-desktop");
}

function toggleMobileMenu(event) {
  event.stopPropagation();
  const isProducDetailsClosed =
    shoppingCartContainer.classList.contains("inactive");
  if (!isProducDetailsClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("slide");
}

function productDetails(event) {
  event.stopPropagation();
  const isMobileMenuClosed = !mobileMenu.classList.contains("slide");
  const isDesktopMenuClosed = !menuDesktop.classList.contains("slide-desktop");
  mobileMenu.classList.remove("slide");
  menuDesktop.classList.remove("slide-desktop");
  shoppingCartContainer.classList.toggle("inactive");
  productDetailContainer.classList.add("inactive");
}

function closeAllMenus() {
  const isMobileMenuClosed = !mobileMenu.classList.contains("slide");
  const isDesktopMenuClosed = !menuDesktop.classList.contains("slide-desktop");
  const isProducDetailsClosed =
    shoppingCartContainer.classList.contains("inactive");
  if (!isMobileMenuClosed || !isDesktopMenuClosed || !isProducDetailsClosed) {
    mobileMenu.classList.remove("slide");
    menuDesktop.classList.remove("slide-desktop");
    shoppingCartContainer.classList.add("inactive");
  }
}
function openProductDetail() {
  productDetailContainer.classList.remove("inactive");
  console;
}

function closeProductDetail() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Car",
  price: 20000,
  image:
    "https://autotest.com.ar/wp-content/uploads/2021/06/tesla-model-s-plaid-frente.jpg",
});
productList.push({
  name: "Laptop",
  price: 300,
  image:
    "https://media.4rgos.it/i/Argos/3319-m0014-m007-m050-asym-m008-m022-laptop-guide-248175189-hero?maxW=768&bg=rgb(255,255,255)&qlt=75&fmt.jpeg.interlaced=true",
});

function renderProducts(arr) {
  arr.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener("click", function () {
      openProductDetail();
      showInfoProduct(product.name, product.price, product.image);
    });

    // Ordenando los elementos ya creados
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfoFigure.appendChild(productImgCart);
    cardsContainer.appendChild(productCard);
  });
}
// Creando los elementos del HTML

renderProducts(productList);

// Mostrar la info de cada producto

function showInfoProduct(name, price, image) {
  productDetailName.innerHTML = name;
  productDetailImg.setAttribute("src", image);
  productDetailPrice.innerHTML = "$" + price;
}
