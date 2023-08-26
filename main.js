const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector("#shoppingCartConteiner");
const productDetailContaine = document.querySelector("#product-detail");
const productDetailContaineImg = document.querySelector("#product-detail .imgAside");
const productDetailContainePrice = document.querySelector("#product-detail .product-info .price");
const productDetailContaiName = document.querySelector("#product-detail .product-info .name");
const productDetailClose = document.querySelector(".product-detail-close");

console.log(productDetailContaineImg);

/*   .navbar-shopping-cart img,
  .navbar-shopping-cart div */

navEmail.addEventListener("click", toggleDesktopMenu);
menu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", shoppingCartMenu);
productDetailClose.addEventListener("click", () => {
productDetailContaine.classList.add("inactive");
});
function toggleDesktopMenu() {
  shoppingCart.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
  productDetailContaine.classList.add('inactive');
}

function toggleMobileMenu() {
  shoppingCart.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
  productDetailContaine.classList.add("inactive");
}

function shoppingCartMenu() {
  productDetailContaine.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCart.classList.toggle("inactive");
}

function openProductDetailAside(imset,price,name) {
  productDetailContaine.classList.remove("inactive");
  productDetailContaineImg.setAttribute('src', imset)
  productDetailContainePrice.innerHTML = price
  productDetailContaiName.innerHTML = name
}

const productList = [];

productList.push({
  name: "bike",
  price: 200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Logitech Wirless",
  price: 80,
  ////* 
  img: "data:image/jpeg;base64,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",
});
productList.push({
  name: "Ion Speaker",
  price: 200,
  img: "https://d1jtxvnvoxswj8.cloudfront.net/catalog/product/cache/37370d077d4c09f73602e39b8814b529/1/0/10_proglowexpress_qt_r_mic-color3.jpg",
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
      <div> divPFather no es class 
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
</div>
 */

const CardsContainer = document.querySelector(".cards-container");
function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.img);

    img.addEventListener("click",function(){ openProductDetailAside(product.img,product.price,product.name); });

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const divPFather = document.createElement("div");

    const PPrice = document.createElement("p");
    PPrice.innerText = `$${product.price.toFixed(2)}`;
    const PProduct = document.createElement("p");
    PProduct.innerText = product.name;

    const infoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    divPFather.appendChild(PPrice);
    divPFather.appendChild(PProduct);
    infoFigure.appendChild(productImgCart);

    productInfo.appendChild(divPFather);
    productInfo.appendChild(infoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    CardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
