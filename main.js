//menu email
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu");
const productDetailIcon=document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const shopingCartContainer = document.querySelector("#shopingCartContainer");

const productDetailContainer = document.querySelector('#productDetail')
menuEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  shopingCartContainer.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
  productDetailContainer.classList.add('inactive');
}

menuIcon.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  shopingCartContainer.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
  productDetailContainer.classList.add('inactive');
}

menuCarrito.addEventListener("click", toggleCarritoAside);
function toggleCarritoAside() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shopingCartContainer.classList.toggle("inactive");
  productDetailContainer.classList.add('inactive');
}
function openProductDetailAside(){
  productDetailContainer.classList.remove('inactive');
  desktopMenu.classList.add("inactive");
  shopingCartContainer.classList.add("inactive");
}
productDetailIcon.addEventListener('click', closeProductDetailAside);
function closeProductDetailAside(){
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
  name: "pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computador",
  price: 555,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener('click', openProductDetailAside)
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    productInfoDiv.append(productPrice, productName);
    // productInfoDiv.appendChild(productPrice);
    // productInfoDiv.appendChild(productName);
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
