// @ts-nocheck
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleCartAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

/**
 * "If the shoppingCartContainer is not closed, close it, then toggle the desktop menu."
 */
function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

//Here below, inside the functions, we have the conditionals that allow for the mobileMenu and the shoppingCartContainer to exchange states. For example if mobileMenu is open, and we try to open shoppingCartContainer, mobileMenu will close and shoppingCartContainer will open.

/**
 * If the shoppingCartContainer is not closed, add the inactive class to it. Then toggle the inactive class on the
 * mobile menu
 */
function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

/**
 * If the mobile menu is open, close it, then toggle the cart shoppingCartContainer
 */
function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  const isShoppingCartClosed =
    shoppingCartContainer.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isShoppingCartClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

// Here below we have the code to create one card and add products to them with arrays

const productList = [];

productList.push(
  {
    name: "iPhone 14 Pro Max",
    price: 1199.99,
    image:
      "https://cdn.shopify.com/s/files/1/1043/3082/products/iPhone_14_Pro_Max_Silver_PDP_Image_Position-2_Design_SEA_1800x1800.jpg?v=1662620837",
  },
  {
    name: 'Samsung - 75" Smart TV',
    price: 599.99,
    image:
      "https://cdn.elchangarro.com.sv/image/uploads/ec/105633-92645234_0138972398.jpg?quality=40&width=1000&height=1000",
  },
  {
    name: "Macbook Pro",
    price: 1500,
    image:
      "https://www.nexus.com.bd/images/detailed/5/Apple_MacBook_Pro_Core_i9_9th_Gen_16GB_RAM_1TB_Space_Gray.jpg",
  },
  {
    name: "Play Station 5",
    price: 499.99,
    image:
      "https://media.direct.playstation.com/is/image/sierialto/PS5-front-with-dualsense",
  },
  {
    name: "Nintendo Switch OLED",
    price: 349.99,
    image: "https://media.gamestop.com/i/gamestop/11149258",
  },
  {
    name: "Apple iPad",
    price: 329.99,
    image:
      "https://ie.selectonline.com/media/catalog/product/cache/bb9e1b18b231b11cd7447bbf02a454cb/i/P/iPad_10.2_inch_Wi-Fi_Silver_PDP_Image_Position-1__GBEN.jpg",
  },
  {
    name: "Samsung Galaxy S22 Ultra",
    price: 999.99,
    image:
      "https://buketomnisportpweb.s3.us-east-2.amazonaws.com/seo/AAOQqPIq2bFSICu02c9XZKLRHBDqMrZxeGxvMuWP.png",
  }
);

function renderProducts(array) {
  /* Creating a card for each product in the productList array. */
  for (product of array) {
    //Creating each HTML element and adding classes, text and sources.
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    /* When the productImg element is clicked, the
    openProductDetailAside function will be called. */
    productImg.addEventListener("click", openProductDetailAside);
    //Line below adds css to html tags created with js
    productImg.style.cursor = "pointer";

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    // Placing each created element inside its container
    productInfoDiv.append(productPrice, productName);

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
