const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppigCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleBurgerMenu);
menuShoppingCart.addEventListener("click", toggleShoppingCart);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
   const isAsideOpened = !shoppigCartContainer.classList.contains("inactive");

   if (isAsideOpened) shoppigCartContainer.classList.toggle("inactive");
   desktopMenu.classList.toggle("inactive");
}
function toggleBurgerMenu() {
   const isAsideOpened = !shoppigCartContainer.classList.contains("inactive");

   if (isAsideOpened) shoppigCartContainer.classList.toggle("inactive");

   closeProductDetailAside();
   mobileMenu.classList.toggle("inactive");
}
function toggleShoppingCart() {
   const isMobileMenuOpened = !mobileMenu.classList.contains("inactive");
   const isDesktopMenuOpened = !desktopMenu.classList.contains("inactive");
   const isProductDetailOpened = !productDetailContainer.classList.contains("inactive");

   if (isMobileMenuOpened) mobileMenu.classList.toggle("inactive");
   if (isDesktopMenuOpened) desktopMenu.classList.toggle("inactive");
   if (isProductDetailOpened) productDetailContainer.classList.toggle("inactive");

   shoppigCartContainer.classList.toggle("inactive");
}
function openProductDetailAside(event) {
   shoppigCartContainer.classList.add("inactive");
   const productSelected = productList.filter(item=> item.image===event.srcElement.currentSrc);
   renderProductDetail(productSelected[0]);
   productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
   productDetailContainer.classList.add("inactive");
}

// Creating products
const productList = [];
productList.push({
   name: "Bike",
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});
productList.push({
   name: "Computer",
   price: 1300,
   image: "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   info: "The most important tool for your bussiness and entertainment, perfect match in your setup.",
});
productList.push({
   name: "Ipad",
   price: 990,
   image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   info: "The beautifulest device in your desktop, and the better technologie at your fingertips.",
});
productList.push({
   name: "Dron",
   price: 550,
   image: "https://images.pexels.com/photos/343238/pexels-photo-343238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   info: "Taking the most gorgeous pictures from the sky and keeping your best moments with this cutting edge device.",
});
productList.push({
   name: "SmartPhone",
   price: 750,
   image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   info: "your best friend in the communication field, carry your information always in your pockets.",
});

renderProducts(productList);

function renderProducts(arr) {
   for (product of arr) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);
      productImg.addEventListener("click", openProductDetailAside);

      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");

      const productInfoDiv = document.createElement("div");
      const productPrice = document.createElement("p");
      productPrice.innerHTML = "$ " + product.price;
      const productName = document.createElement("p");
      productName.innerHTML = product.name;
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);

      const productInfoFig = document.createElement("figure");
      const imgCart = document.createElement("img");
      imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
      productInfoFig.appendChild(imgCart);

      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFig);

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
      cardsContainer.appendChild(productCard);
   }
}
function renderProductDetail(product) {
      const productImg = document.querySelector("#productImg");
      productImg.setAttribute("src", product.image);
      productImg.setAttribute("alt", product.name);

      const productPrice = document.querySelector("#productPrice");
      productPrice.innerHTML = "$ " + product.price;

      const productName = document.querySelector("#productName");
      productName.innerHTML = product.name;

      const productInfo = document.querySelector("#producDescription");
      productInfo.innerHTML = product.info;
}
