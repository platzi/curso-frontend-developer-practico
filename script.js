const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIconAside = document.querySelector('.navbar-shopping-cart');
const closeIconProductDetail = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailAside = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIconMenu.addEventListener('click', toggleMobileMenu);
cartIconAside.addEventListener('click', toggleMyOrderAside);
closeIconProductDetail.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu () {
    shoppingCartContainer.classList.add('inactive');
    productDetailAside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    shoppingCartContainer.classList.add('inactive')
    productDetailAside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
}

function toggleMyOrderAside () {
    mobileMenu.classList.add('inactive')
    productDetailAside.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside (){
    productDetailAside.classList.remove('inactive')
    shoppingCartContainer.classList.add('inactive')
    desktopMenu.classList.add('inactive');
}

function closeProductDetailAside (){
    productDetailAside.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: '220',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: '900',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProduct (arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice,productName)
    
        const productInfoFigure = document.createElement('figure');
        
        const productImgInfoFigure = document.createElement('img');
        productImgInfoFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgInfoFigure)
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(productImage, productInfo);
    
        cardsContainer.append(productCard);
    }
}

renderProduct(productList);
