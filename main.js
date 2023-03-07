const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function renderProducts (products)
{
  for (product of products) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement("div");
  
    const productPrice = document.createElement("p");
    productPrice.innerText = product.price + "€";
  
    const productName = document.createElement("p");
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    productsContainer.appendChild(productCard);
  }
  
}

const productList = [];

productList.push({
  name: "Bike",
  price: 1803.5,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Pantalla",
  price: 436.8,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Laptop",
  price: 1695.0,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

renderProducts(productList);
