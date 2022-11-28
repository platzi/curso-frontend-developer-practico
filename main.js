const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDesktopMenu);
menu.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleProductDetail);

const cardsContainer = document.querySelector(".cards-container");

function toggleDesktopMenu() {
  productDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductDetailActive = !productDetail.classList.contains("inactive");
  mobileMenu.classList.toggle("inactive");

  if (isProductDetailActive) {
    productDetail.classList.add("inactive");
    console.log("product detail is active");
  }
}

function toggleProductDetail() {
  const isMobileMenuActive = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuActive = !desktopMenu.classList.contains("inactive");
  productDetail.classList.toggle("inactive");
  if (isMobileMenuActive) {
    mobileMenu.classList.add("inactive");
  } else if (isDesktopMenuActive) {
    desktopMenu.classList.add("inactive");
  }
}

const productList = [];
productList.push({
  name: "Switch",
  price: 100,
  image:
    "https://www.abasteo.mx/out/productdescription/iframe/CISCO/SF110-24-NA/images/SF110-24-NA-1.png",
});
productList.push({
  name: "Router",
  price: 200,
  image: "https://m.media-amazon.com/images/I/71CWnEDHVxL.jpg",
});
productList.push({
  name: "Modem",
  price: 300,
  image: "https://m.media-amazon.com/images/I/81H48PPVpmL.jpg",
});
productList.push({
  name: "Cable",
  price: 400,
  image: "https://m.media-amazon.com/images/I/61Nj6nHbCvL._AC_SL1500_.jpg",
});
productList.push({
  name: "Adapter",
  price: 500,
  image: "https://m.media-amazon.com/images/I/61Yx9YT9gbL.jpg",
});

function renderProducts(productListArray) {
  for (product of productListArray) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const img = document.createElement("img");
    img.src = product.image;
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const div = document.createElement("div");
    const price = document.createElement("p");
    price.textContent = "$" + product.price;
    const name = document.createElement("p");
    name.textContent = product.name;
    const figure = document.createElement("figure");
    const img2 = document.createElement("img");
    img2.src = "./icons/bt_add_to_cart.svg";

    figure.appendChild(img2);
    div.appendChild(price);
    div.appendChild(name);
    productInfo.appendChild(div);
    productInfo.appendChild(figure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
