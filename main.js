//Variables constantes
alert("choncha")
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const openProductDetail = document.querySelector(".productDetail");
const closeProductDetail = document.querySelector(".productDetail-close");
//Email Menu
menuEmail.addEventListener("click", menuToggle);
function menuToggle() {
  desktopMenu.classList.toggle("inactive");
}

//burger Menu
menuBurger.addEventListener("click", menuToggleMobile);
function menuToggleMobile() {
  const productDetail = openProductDetail.classList.contains("inactive")
  if (!productDetail) {
    openProductDetail.classList.add("inactive");
  }
  const carritoStatus = shoppingCartContainer.classList.contains("inactive");
  if (!carritoStatus) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}
//openProductDetail
function openPD() {
  const carritoStatus = shoppingCartContainer.classList.contains("inactive");
  if (!carritoStatus) {
    shoppingCartContainer.classList.add("inactive");
  }
  openProductDetail.classList.remove("inactive");
}
closeProductDetail.addEventListener("click", closePD);
function closePD() {
  openProductDetail.classList.add("inactive");
}
// Aside mobile

aside.addEventListener("click", menuAside);
function menuAside() {
  const productDetail = openProductDetail.classList.contains("inactive")
  if (!productDetail) {
    openProductDetail.classList.add("inactive");
  }
  const burgerStatus = mobileMenu.classList.contains("inactive");
  if (!burgerStatus) {
    mobileMenu.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

// <div class="product-card">
//           <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//           <div class="product-info">
//             <div>
//               <p>$120,00</p>
//               <p>Bike</p>
//             </div>
//             <figure>
//               <img src="./icons/bt_add_to_cart.svg" alt="">
//             </figure>
//           </div>
//         </div>
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Car",
  price: 224,
  img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
  name: "Fly",
  price: 2240,
  img: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600",
});

for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.img);
  productImg.addEventListener("click", openPD);

  //prouductInfo
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  //Info name and price
  const divGeneral = document.createElement("div");
  const price = document.createElement("p");
  price.innerText = product.price;
  const nombre = document.createElement("p");
  nombre.innerText = product.name;
  divGeneral.append(price, nombre);

  //Last CardImagen.
  const divImg = document.createElement("div");
  const figureImg = document.createElement("figure");
  const imagenCart = document.createElement("img");
  imagenCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  figureImg.append(imagenCart);
  divImg.append(figureImg);

  //Appends Generales
  productInfo.append(divGeneral, divImg);
  productCard.append(productImg, productInfo);
  cardsContainer.append(productCard);
}
