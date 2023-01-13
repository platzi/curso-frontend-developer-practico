const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('#product-detail')
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartMenu.addEventListener('click', toggleShoppingCartMenu);
productDetailClose.addEventListener('click', closeProductDetail)

function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
	mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartMenu() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
    shoppingCart.classList.toggle('inactive');
}

function openProductDetail() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }
    productDetail.classList.remove('inactive')
}

function closeProductDetail() {
    productDetail.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Skateboard',
    price: '20',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bed',
    price: '40',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Skateboard',
    price: '20',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bed',
    price: '40',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

function renderProducts(productList) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
        
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.setAttribute('alt', product.name);
        productImage.addEventListener('click', openProductDetail)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + ((product.price / 100) * 100).toFixed(2)
        
        const productName = document.createElement('p');
        productName.innerHTML = product.name;    
        
        const productInfoFigure = document.createElement('figure');
        
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(figureImg);
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)