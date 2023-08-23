const menuEmail = document.querySelector(".navbar-email");
const menuMobileIcon = document.querySelector(".menu");
const shoppingCarIcon = document.querySelector(".navbar-shopping-cart");
const arrowShoppigCarIcon = document.querySelector(".arrow-container");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCar = document.querySelector("#shoppingCar");
const productDetail = document.querySelector("#productDetail");


const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileIcon.addEventListener("click", toggleMobileMenu);
shoppingCarIcon.addEventListener("click", toggleShoppingCar);
arrowShoppigCarIcon.addEventListener("click", toggleShoppingCar);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isShoppingCarClosed = shoppingCar.classList.contains("inactive");

  if (!isShoppingCarClosed) {
    shoppingCar.classList.add("inactive");
  }

  closeProductDetailAside();

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isShoppingCarClosed = shoppingCar.classList.contains("inactive");

  if (!isShoppingCarClosed) {
    shoppingCar.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCar() {
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  closeProductDetailAside();

  shoppingCar.classList.toggle("inactive");
}

function openProductDetailAside() {
  desktopMenu.classList.add("inactive");
  shoppingCar.classList.add("inactive");

  productDetail.classList.remove('inactive')
}

function closeProductDetailAside() {
  productDetail.classList.add('inactive')
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computador",
  price: 620,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);