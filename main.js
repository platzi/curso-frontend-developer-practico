const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
navbarEmail.addEventListener("click", toggleDesktopMenu);
hamburgerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleAside);
productDetailCloseIcon.addEventListener("click", closeProductDetail )

function toggleDesktopMenu() {
  const isAsideMenuOpen = !shoppingCartContainer.classList.contains("inactive");
  if (isAsideMenuOpen) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideMenuOpen = !shoppingCartContainer.classList.contains("inactive");
  if (isAsideMenuOpen) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetail()
  mobileMenu.classList.toggle("inactive");
}

function toggleAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");

  if (isMobileMenuOpen) {
    mobileMenu.classList.add("inactive");
  }
  const isProductDetailClosed = shoppingCartContainer.classList.contains("inactive");

  if(isProductDetailClosed){
    productDetailContainer.classList.add("inactive")
  }
  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDestail() {

  shoppingCartContainer.classList.add("inactive")
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetail() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  img: "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
});
productList.push({
  name: "Laptop",
  price: 620,
  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const img = document.createElement("img");
    img.setAttribute("src", product.img);

    img.addEventListener("click", openProductDestail );
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "/icons/bt_add_to_cart.svg");

    productFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
