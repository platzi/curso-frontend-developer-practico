const $ = (selector) => document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const burgerMenu = $(".menu");
const mobileMenu = $(".mobile-menu");
const menuIconCar = $(".navbar-shopping-cart");
const productDetailCloseIcon = $(".product-detail-close");
const shoppingCartContainer = $("#shoppingCartContainer");
const productDetailContainer = $("#productDetail");
const cardsContainer = $(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuIconCar.addEventListener("click", toggleAsideCar);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu () {
const isAsideClosed = shoppingCartContainer.classList.contains("inactive");if (!isAsideClosed) { 
shoppingCartContainer.classList.add("inactive");
}
desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu () {
const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
if (!isAsideClosed) { 
shoppingCartContainer.classList.add("inactive");
}
closeProductDetailAside();
mobileMenu.classList.toggle("inactive");
}
function toggleAsideCar () {
const isMobileMenuClosed = mobileMenu.classList.contains
("inactive");

if (!isMobileMenuClosed) {
mobileMenu.classList.add("inactive");
}
const isProductDetailClosed = productDetailContainer.classList.contains
("inactive");

if (!isProductDetailClosed) {
productDetailContainer.classList.add("inactive");
}

shoppingCartContainer.classList.toggle("inactive");
}
function openProductDetailAside(){
shoppingCartContainer.classList.add("inactive")
productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside(){
productDetailContainer.classList.add("inactive");
}
const productList = [];
productList.push({
    name : "Bike",
    price : 120,
    image  :"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name : "Paris Saint Germain",
    price : 99,
    image :"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name : "Real Madrid",
    price : 89,
    image :"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name : "Bayern Munchen",
    price : 79,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name : "Borussia Dormunt",
    price : 69,
    image  : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name : "Manchester City",
    price : 59,
    image  : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name : "Barcelona FC",
    price : 49,
    image  : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name : "Liverpool Fc",
    price : 39,
    image  : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
function renderProducts(arr) {
for (product of  arr){
const productCard = document.createElement("div");
productCard.classList.add("product-card");

// product= {name, price, image} -> product.image
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

productInfoDiv.append(productPrice, productName);

const productInfoFigure = document.createElement("figure");
const productImgCart = document.createElement("img");
productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

productInfoFigure.append(productImgCart);

productInfo.append(productInfoDiv, productInfoFigure);

productCard.append(productImg, productInfo);

cardsContainer.appendChild(productCard);
} 
}
renderProducts(productList);