const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  mobileMenu.classList.toggle("inactive");

  if (!isAsideClosed) {
    mobileMenu.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const mobileMenuClosed = mobileMenu.classList.contains("inactive");

  /*   aside.classList.toggle("inactive"); */
  if (!mobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  img: "https://cdn.shopify.com/s/files/1/0255/9528/1483/products/1_7_1800x1800.jpg?v=1658888429",
});

productList.push({
  name: "TV",
  price: 500,
  img: "https://exitocol.vtexassets.com/arquivos/ids/11179668/Tv-Led-126-Cms-50-Uhd-4K-Smart-LG-50-Pulgadas-Smart-Tv-50UP7500PSFAWC-3032811_c.jpg?v=637743137099270000",
});

productList.push({
  name: "Car",
  price: 10000,
  img: "https://maserati.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg?$1920x2000$&fit=constrain",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = "$" + product.name;

    productInfoDiv.append(productName, productPrice);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */
