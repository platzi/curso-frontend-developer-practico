const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector("#shoppingCartConteiner");
const productDetailContaine = document.querySelector("#product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

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

function openProductDetailAside() {
  productDetailContaine.classList.remove("inactive");
}

const productList = [];

productList.push({
  name: "bike",
  price: 200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "bike",
  price: 200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "bike",
  price: 200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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

    img.addEventListener("click", openProductDetailAside);

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
