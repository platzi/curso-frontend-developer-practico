const emailNavbar = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingcartNavbar = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")
const productDetailDescription = document.querySelector(".product-detail-description");

emailNavbar.addEventListener("click", desktopMenuToggle);
function desktopMenuToggle(){
  desktopMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  productDetail.classList.add("inactive");
}

menu.addEventListener("click", mobileMenuToggle);
function mobileMenuToggle(){
mobileMenu.classList.toggle("inactive");
productDetail.classList.add("inactive");
desktopMenu.classList.add("inactive");
}

shoppingcartNavbar.addEventListener("click", productDetailToggle)

function productDetailToggle(){
  productDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Television",
  price: 1000,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Television",
  price: 3000,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Television",
  price: 4000,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Television",
  price: 5005,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Television",
  price: 5780,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});




for(product of productList){
const productCard = document.createElement("div");
productCard.classList.add("product-card");
const productImage = document.createElement("img");
productImage.setAttribute("src", product.image);
const productInfo = document.createElement("div");
productInfo.classList.add("product-info");
const productInfoDiv = document.createElement("div");
const productPrice = document.createElement("p");
productPrice.innerText = "$ "+ product.price;
const productName = document.createElement("p");
productName.innerText = product.name;
const figure = document.createElement("figure");
const imgIconCart = document.createElement("img");
imgIconCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

cardsContainer.appendChild(productCard);
productCard.appendChild(productImage);
productCard.appendChild(productInfo);
productInfo.appendChild(productInfoDiv);
productInfoDiv.appendChild(productPrice);
productInfoDiv.appendChild(productName);
productInfo.appendChild(figure);
figure.appendChild(imgIconCart);
};
 /*<section class="main-container">
<div class="cards-container">

  <div class="product-card">
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
  </div>
</section> */

