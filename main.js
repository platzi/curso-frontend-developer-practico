const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
// mobile desktop
const arrowMenuLeft = document.getElementById("email-arrow-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mailAndArrowMenu = document.querySelector(".navbar-email");
// menu mobile
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//cart
const cartBtn = document.querySelector(".navbar-shopping-cart");
// product detail
const productImg = document.querySelector(".product-card img");
const productCloseDetail = document.querySelector('.product-detail-close');
const productDetailContainer = document.querySelector('#productDetail');

mailAndArrowMenu.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
cartBtn.addEventListener("click", toggleCartAside);
productCloseDetail.addEventListener('click',closeDetail);

function toggleDesktopMenu() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");

  desktopMenu.classList.toggle("inactive");
  arrowMenuLeft.classList.toggle("arrow-down");
}

function toggleMobileMenu() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");

  mobileMenu.classList.toggle("inactive");
}

function toggleCartAside() {
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
  
  shoppingCartContainer.classList.toggle("inactive");
}

function showDetail(){
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add('inactive');

  productDetailContainer.classList.remove('inactive');
}

function closeDetail() {
  productDetailContainer.classList.add('inactive');
}

// products
const productsList = [];
productsList.push({
  name: "Bike",
  price: 120.0,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productsList.push({
  name: "TV QLED",
  price: 480.0,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_961652-MLA53227504373_012023-O.webp",
});
productsList.push({
  name: "PC Gamer",
  price: 720.0,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_662637-MLA46508148490_062021-O.webp",
});

renderProducts(productsList);

function renderProducts(listOfItems) {
  const productCardContainer = document.querySelector(".cards-container");
  for (product of listOfItems) {
    console.log("insertando: " + product.name);

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener('click',showDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const imgCart = document.createElement("img");
    imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(imgCart);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);
    productCardContainer.appendChild(productCard);

  }
}

