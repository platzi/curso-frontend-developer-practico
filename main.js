const menuEmail = document.querySelector(".navbar-email");
const menuBurger = document.querySelector(".menu");
const cartList = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
cartList.addEventListener("click", toggleCartList);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}
function toggleCartList() {
  mobileMenu.classList.add("inactive");
  aside.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Cellphone",
  price: "520.00",
  image:
    "https://www.fda.gov/files/styles/main_image_medium/public/smartphone.jpg?itok=Iqc_wjqn",
});
productList.push({
  name: "Pantalla",
  price: "220.00",
  image:
    "https://oasis.opstatics.com/content/dam/oasis/page/frankfurt/27-share.jpg",
});
productList.push({
  name: "Compu",
  price: "620.00",
  image:
    "https://i.pcmag.com/imagery/reviews/02lcg0Rt9G3gSqCpWhFG0o1-2..v1656623239.jpg",
});

function renderProducts(arr) {
  for (product of arr) {
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

    cardsContainer.append(productCard);
  }
}

renderProducts(productList);
