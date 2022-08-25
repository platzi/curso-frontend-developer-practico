const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIco = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener("click", toggleDesktopMenu);

menuHamIco.addEventListener("click", toggleMobileMenu);

menuCarritoIcon.addEventListener("click", toggleCarritoshoppingCartContainer);

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoshoppingCartContainer() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Cactus1',
  price: 120,
  image: 'https://images.pexels.com/photos/7354768/pexels-photo-7354768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
});
productList.push({
  name: 'Cactus2',
  price: 120,
  image: 'https://images.pexels.com/photos/7354789/pexels-photo-7354789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Cactus3',
  price: 120,
  image: 'https://images.pexels.com/photos/97260/pexels-photo-97260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
    
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