const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppigCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleBurgerMenu);
menuShoppingCart.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
   const isAsideOpened = !shoppigCartContainer.classList.contains("inactive");

   if (isAsideOpened) shoppigCartContainer.classList.toggle("inactive");
   desktopMenu.classList.toggle("inactive");
}
function toggleBurgerMenu() {
   const isAsideOpened = !shoppigCartContainer.classList.contains("inactive");

   if (isAsideOpened) shoppigCartContainer.classList.toggle("inactive");
   mobileMenu.classList.toggle("inactive");
}
function toggleShoppingCart() {
   const isMobileMenuOpened = !mobileMenu.classList.contains("inactive");
   const isDesktopMenuOpened = !desktopMenu.classList.contains("inactive");

   if (isMobileMenuOpened) mobileMenu.classList.toggle("inactive");
   if (isDesktopMenuOpened) desktopMenu.classList.toggle("inactive");
   shoppigCartContainer.classList.toggle("inactive");
}

// Creating products
const productList = [];
productList.push({
   name: "Bike",
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
   name: "Computer",
   price: 1300,
   image: "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
   name: "Ipad",
   price: 990,
   image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
   name: "Dron",
   price: 550,
   image: "https://images.pexels.com/photos/343238/pexels-photo-343238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
   name: "SmartPhone",
   price: 750,
   image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

renderProducts(productList);


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
