//Desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//Mobile
const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//Shopping Cart
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

//Cards Container
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburgerIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleCartAside);

//Desktop
function toggleDesktopMenu() {
  const isCartAsideClosed = aside.classList.contains("inactive");

  if (!isCartAsideClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

//Mobile
function toggleMobileMenu() {
  const isCartAsideClosed = aside.classList.contains("inactive");

  if (!isCartAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

//Shopping Cart
function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}


// Product List
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Phone",
  price: 560,
  image:
    "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Computer",
  price: 990,
  image:
    "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

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
    productPrice.append("$" + product.price);
    const productName = document.createElement("p");
    productName.append(product.name);

    productInfoDiv.append(productPrice, productName);
    // productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);
    // productInfo.appendChild(productInfoFigure);

    productCard.append(productImg, productInfo);
    // productCard.appendChild(productInfo);

    cardsContainer.append(productCard);
  }
}

renderProducts(productList);