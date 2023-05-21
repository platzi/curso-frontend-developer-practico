const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
 

emailMenu.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleAsideCart);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isMenuAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isMenuAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
    closeProductDetailAside()
};

function toggleMobileMenu(){
    const isMenuAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isMenuAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    };

    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside()
};

function toggleAsideCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    };

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    };

    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    };
    
    shoppingCartContainer.classList.toggle('inactive');
};

function openProductDetailAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    if (!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    };
};

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
};

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name: 'Screen',
    price: 440,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name: 'Screen',
    price: 440,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
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
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        cardsContainer.appendChild(productCard);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productImgCart);
    };
};

renderProducts(productList)