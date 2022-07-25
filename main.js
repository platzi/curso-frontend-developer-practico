//desktop-menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('.car-detail');
const menuImg = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailCross = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', desktopMenuToggle);
menuImg.addEventListener('click', mobileMenuToggle);
menuCarritoIcon.addEventListener('click', carritoToggle);
productDetailCross.addEventListener('click', productDetatilAdd);

function desktopMenuToggle() {
    const isshoppingCarClosed = shoppingCar.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isshoppingCarClosed){
        shoppingCar.classList.toggle('inactive');
    }
    if (!isProductDetailClosed){
        productDetail.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function mobileMenuToggle() {
    const isshoppingCarClosed = shoppingCar.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if (!isshoppingCarClosed){
        shoppingCar.classList.add('inactive');
    }
    if (!isProductDetailClosed){
        productDetail.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function carritoToggle() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed){
        productDetail.classList.toggle('inactive');
    }
    shoppingCar.classList.toggle('inactive');
}

function productDetatilRemove(){
    const isShoppingCarClosed = shoppingCar.classList.contains('inactive');

    if(!isShoppingCarClosed){
        shoppingCar.classList.toggle('inactive');
    }
    productDetail.classList.remove('inactive');
}

function productDetatilAdd(){
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 3120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'monitor',
    price: 320,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'tv',
    price: 420,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', productDetatilRemove);
    
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
