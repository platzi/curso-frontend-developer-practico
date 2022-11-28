const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector("#shoppingCartContainer");

navbarEmail.addEventListener("click", toggleDesktopMenu);
menu.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleProductDetail);

const logo = document.querySelector(".logo");
logo.addEventListener("click", openNewPage);
function openNewPage() {
  window.open("https://cursos.fie.umich.mx/");
}

const cardsContainer = document.querySelector(".cards-container");

function toggleDesktopMenu() {
  aside.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductDetailActive = !aside.classList.contains("inactive");
  mobileMenu.classList.toggle("inactive");

  if (isProductDetailActive) {
    aside.classList.add("inactive");
    console.log("product detail is active");
  }
}

function toggleProductDetail() {
  const isMobileMenuActive = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuActive = !desktopMenu.classList.contains("inactive");
  aside.classList.toggle("inactive");
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
    "https://cdn-icons-png.flaticon.com/512/1089/1089006.png",
});
productList.push({
  name: "Router",
  price: 200,
  image:
    "https://cdn-icons-png.flaticon.com/512/2972/2972473.png",
});
productList.push({
  name: "Modem",
  price: 300,
  image: "https://cdn-icons-png.flaticon.com/512/270/270516.png",
});
productList.push({
  name: "Cable",
  price: 400,
  image: "http://cdn.onlinewebfonts.com/svg/img_488919.png",
});
productList.push({
  name: "Adaptador",
  price: 500,
  image: "https://cdn-icons-png.flaticon.com/512/1716/1716265.png",
});
productList.push({
  name: "Servidor",
  price: 600,
  image: "https://cdn-icons-png.flaticon.com/512/1122/1122581.png",
});
productList.push({
  name: "CV",
  price: 700,
  image: "https://cdn-icons-png.flaticon.com/512/3076/3076343.png",
});
productList.push({
  name: "Seguridad",
  price: 800,
  image: "https://cdn-icons-png.flaticon.com/512/4803/4803145.png",
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
