const navMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

navMail.addEventListener("click", toggleDesktopMenu);
mobileMenuBtn.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");

}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");

}

function toggleAside() {
  shoppingCartContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");

}

function openProductDetailAside() {
  productDetailContainer.classList.remove("inactive");
  shoppingCartContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
  
}
  


const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "TV",
  price: 220,
  img: "https://www.cnet.com/a/img/resize/d73e11d794c227395d6296372d3f2990f34277be/hub/2022/10/31/662e25fa-2914-4983-948e-4fd09bc374c7/hisense-u8h-2022-google-tv-6449.jpg?auto=webp&fit=crop&height=528&width=940",
});

productList.push({
  name: "Laptop",
  price: 620,
  img: "https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    const imageCard = document.createElement("img");
    imageCard.src = product.img;
    imageCard.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productContainer = document.createElement("div");
  
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
  
    const productName = document.createElement("p");
    productName.innerText = product.name;
  
    productContainer.appendChild(productPrice);
    productContainer.appendChild(productName);
  
    const productFigure = document.createElement("figure");
    const productIcon = document.createElement("img");
    productIcon.src = "icons/bt_add_to_cart.svg";
  
    productFigure.appendChild(productIcon);
  
    productInfo.append(productContainer, productFigure);
  
    productCard.appendChild(imageCard);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
