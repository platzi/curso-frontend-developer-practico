const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const productDetailClose = document.querySelector('#product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
carritoMenu.addEventListener('click', toggleAsideMenu)
productDetailClose.addEventListener('click', closeProductDetail)

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetail();
    mobileMenu.classList.toggle('inactive')
    
}

function toggleAsideMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isProductDetail = productDetailContainer.classList.contains('inactive');
       
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    if(!isMenuEmailClosed){
        desktopMenu.classList.add('inactive')
    }

    if(!isProductDetail){
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

productList.push({
    name: 'Bike2',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

function renderProducts(arr) {
    for (product of arr) {
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
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.append(productCard)
    }
}

renderProducts(productList)