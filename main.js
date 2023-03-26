const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
// menuEmail.addEventListener("click", toggleDesktopMenu);

const iconBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
// iconBurger.addEventListener("click", toggleMobileMenu);

const iconShopingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
// iconShopingCart.addEventListener("click", toggleIconShopingCart);

const cardsContainer = document.querySelector(".cards-container");

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleIconShopingCart() {
  desktopMenu.classList.add("inactive");

  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

const productsList = [];
productsList.push({
  name: "Monitor",
  price: 150,
  imageProducts:
    "https://images.pexels.com/photos/2661929/pexels-photo-2661929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productsList.push({
  name: "Keyboard",
  price: 50,
  imageProducts:
    "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productsList.push({
  name: "Mouse",
  price: 30,
  imageProducts:
    "https://images.pexels.com/photos/4034473/pexels-photo-4034473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

// <div class="product-card">
//             <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//             <div class="product-info">
//               <div>
//                 <p>$120,00</p>
//                 <p>Bike</p>
//               </div>
//               <figure>
//                 <img src="./icons/bt_add_to_cart.svg" alt="">
//               </figure>
//             </div> --></img>

function renderProducts(array) {
  for (product of array) {
    // maquetar HTML con JS
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.imageProducts);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = `$${product.price}`;
    const productName = document.createElement("p");
    productName.innerText = `${product.name}`;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImageCart = document.createElement("img");
    productImageCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImageCart);
    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productsList);
