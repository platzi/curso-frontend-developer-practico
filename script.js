const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCart = document.querySelector('.ShopCart');
const productDetail = document.querySelector('.product-detail');
const productDetail1 = document.querySelector('.product-detail1');
const cartsContainer = document.querySelector('.cards-container');



var isMobileMenuClosed;
var isProductDetailClosed;
var isDesktopMenuClosed;

menuMail.addEventListener('click', toggledesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProductDetail);



function toggledesktopMenu (){
    isProductDetailClosed = productDetail.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    const isProductDetail1Closed = productDetail1.classList.contains('inactive');
    if(!isProductDetail1Closed){
        productDetail1.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu (){
    isProductDetailClosed = productDetail.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }
    const isProductDetail1Closed = productDetail1.classList.contains('inactive');
    if(!isProductDetail1Closed){
        productDetail1.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleProductDetail (){
    isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    const isProductDetail1Closed = productDetail1.classList.contains('inactive');
    if(!isProductDetail1Closed){
        productDetail1.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Calculadora',
    price: 60,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
function renderProducts (arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
       
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
    
        cartsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
const productCard = document.querySelector('.product-card');
productCard.addEventListener('click', openAsideProduct);
function openAsideProduct(){
    productDetail1.classList.remove('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetail.classList.toggle('inactive');
    }
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
}
const productDetailIcon = document.querySelector('.product-detail1-close');
productDetailIcon.addEventListener('click', closeAsideProduct);

function closeAsideProduct(){
    productDetail1.classList.add('inactive');
}