const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const itemCounter = document.querySelector("#itemCounter");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppigCartContainer = document.querySelector("#shoppingCartContainer");
const shoppigCartCloseIcon = document.querySelector(".title-container");
const buttonAddItem = document.querySelector(".add-to-cart-button");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");
const myOrderContainer = document.querySelector(".my-order-content");
const totalCostContainer = document.querySelector(".totalCost");
const modalBox = document.getElementById("myModal");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleBurgerMenu);
menuShoppingCart.addEventListener("click", toggleShoppingCart);
shoppigCartCloseIcon.addEventListener("click", toggleShoppingCart);
buttonAddItem.addEventListener("click", addItemToCart);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

// Menus
function toggleDesktopMenu() {
   shoppigCartContainer.classList.add("inactive");
   closeProductDetailAside();
   desktopMenu.classList.toggle("inactive");
   modalBox.style.display = "none";
}
function toggleBurgerMenu() {
   shoppigCartContainer.classList.add("inactive");
   closeProductDetailAside();

   mobileMenu.classList.toggle("inactive");
   modalBox.style.display = "none";
}

// Product detail
function openProductDetailAside(event) {
   desktopMenu.classList.add("inactive");
   shoppigCartContainer.classList.add("inactive");

   productSelected = getProductSelected(event);

   renderProductDetail(productSelected);
   productDetailContainer.classList.remove("inactive");
   modalBox.style.display = "block";
}
function closeProductDetailAside() {
   productSelected = {};
   productDetailContainer.classList.add("inactive");
   modalBox.style.display = "none";
}

// Shopping cart container
function toggleShoppingCart() {
   mobileMenu.classList.add("inactive");
   desktopMenu.classList.add("inactive");
   closeProductDetailAside();

   const isshoppingCartClosed =
      shoppigCartContainer.classList.contains("inactive");
   if (isshoppingCartClosed) {
      renderMyOrder(cartProducts);
      modalBox.style.display = "block";
   } else {
      modalBox.style.display = "none";
   }

   shoppigCartContainer.classList.toggle("inactive");
}
function addItemToCart() {
   addProductToMyOrder(productSelected);
}
function addToCartSmall(event) {
   shoppigCartContainer.classList.add("inactive");
   const productPressed = getProductSelected(event);
   addProductToMyOrder(productPressed);
}
function removeItem(event) {
   cartProducts = cartProducts.filter(
      (item) => item.name != event.currentTarget.productName
   );
   updateItemCounter();
   renderMyOrder(cartProducts);
}

// Modal operations:
window.onclick = function (event) {
   if (event.target == modalBox) {
      closeProductDetailAside();
      shoppigCartContainer.classList.add("inactive");
      modalBox.style.display = "none";
   }
   const isdesktopMenuOpened = !desktopMenu.classList.contains("inactive");
   if (
      isdesktopMenuOpened &&
      !desktopMenu.contains(event.target) &&
      !menuEmail.contains(event.target)
   ) {
      desktopMenu.classList.add("inactive");
   }
};

// Creating products and load principal page
var productSelected = {};
var cartProducts = [];
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

// General functions DOM manipulation
function updateItemCounter() {
   let totalUnits = 0;
   for (let index = 0; index < cartProducts.length; index++) {
      totalUnits += cartProducts[index].units;
   }
   itemCounter.innerHTML = `${totalUnits}`;
}
function getProductSelected(event) {
   return productList.filter(
      (item) => item.name === event.currentTarget.productName
   )[0];
}
function findIndex(needle, haystack) {
   for (let index = 0; index < haystack.length; index++) {
      if (haystack[index].name == needle) return index;
   }
   return -1;
}
function addProductToMyOrder(product) {
   indexProduct = findIndex(product.name, cartProducts);
   if (indexProduct != -1) {
      cartProducts[indexProduct].units++;
   } else {
      let productToAdd = JSON.parse(JSON.stringify(product));
      productToAdd.units = 1;
      cartProducts.push(productToAdd);
   }

   updateItemCounter();
}
function renderProducts(arr) {
   for (product of arr) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);
      productImg.productName = product.name;
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
      imgCart.addEventListener("click", addToCartSmall);
      imgCart.productName = product.name;
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
function renderMyOrder(arr) {
   myOrderContainer.innerHTML = "";
   let totalCost = 0;
   for (product of arr) {
      const itemOrdered = document.createElement("div");
      itemOrdered.classList.add("shopping-cart");

      const figureImg = document.createElement("figure");
      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);
      productImg.setAttribute("alt", product.name);
      figureImg.appendChild(productImg);
      itemOrdered.appendChild(figureImg);

      const productName = document.createElement("p");
      productName.innerHTML = `${product.name} x${product.units}`;
      itemOrdered.appendChild(productName);

      const productPrice = document.createElement("p");
      productPrice.innerHTML = `$ ${product.price * product.units}`;
      totalCost += product.price * product.units;
      itemOrdered.appendChild(productPrice);

      const closeImg = document.createElement("img");
      closeImg.setAttribute("src", "./icons/icon_close.png");
      closeImg.setAttribute("alt", "close");
      closeImg.productName = product.name;
      closeImg.addEventListener("click", removeItem);
      itemOrdered.appendChild(closeImg);

      myOrderContainer.appendChild(itemOrdered);
   }

   totalCostContainer.innerHTML = `$ ${totalCost}`;
}
