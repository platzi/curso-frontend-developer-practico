const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('.product-detail-secondary')
const productDetailClose = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
} 

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside()
} 

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.toggle('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    } if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

     const isProductDetailClosed = productDetailContainer.classList.add('inactive') 
    

    if (!isProductDetailClosed) {
        productDetailContainer.classList.contains('inactive') 
    }

    aside.classList.toggle('inactive');
}

function openProductDetailAside() {
    aside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: '220',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: '350',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts (arr) {
    for (product of productList) {
    const productCard = document.createElement('div'); productCard.classList.add('product-card');

    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)
    
    const productInfo = document.createElement('div'); productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p'); 
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p');
    productName.innerText = product.name

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);
    
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
 }
}

renderProducts(productList)

