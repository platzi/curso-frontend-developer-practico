//@ts-check
const s_ = (selector) => 
document.querySelector(selector);

const menuEmail = s_('.navbar-email');
const HamburguerIcon = s_('.menu');
const menuCarritoIcon = s_('.navbar-shopping-cart');
const ProductDetailCloseIcon = s_('.product-detail-close')
const desktopMenu = s_('.desktop-menu');
const mobileMenu= s_('.mobile-menu');
const shoppingCartContainer = s_('#shoppingCartContainer')
const cardsContainer = s_('.cards-container');
const productCard = s_('.product-card');
const productDetailContainer = s_('#productDetail')

menuEmail.addEventListener('click', toggleDesktopMenu);
HamburguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
ProductDetailCloseIcon.addEventListener('click', CloseProductDetailAside)

function toggleDesktopMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

        if(!isProductDetailClose){
            productDetailContainer.classList.add('inactive')
        }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    productDetailContainer.classList.add('inactive')

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive')
        }

        const isProductDetailClose = productDetailContainer.classList.contains('inactive');

        if(!isProductDetailClose){
            productDetailContainer.classList.add('inactive')
        }
const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')
}

function oppenProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.add ("inactive")
}

function CloseProductDetailAside(){
    productDetailContainer.classList.toggle('inactive')
    
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
     
function renderProducts(arr) {
    for (let product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', oppenProductDetailAside)
    
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