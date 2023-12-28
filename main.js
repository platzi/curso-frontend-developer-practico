'use strict';

//Variables
const menuEmail=document.querySelector ('.navbar-email'); 
const desktopMenu=document.querySelector ('.desktop-menu'); 
const burgerMenu=document.querySelector ('.menu'); 
const mobileMenu=document.querySelector ('.mobile-menu');
const cartIcon=document.querySelector ('.navbar-shopping-cart');
const myOrder=document.querySelector ('#shoppingCart');
const productDetail =document.querySelector ('#product-detail');
const closeDetail = document.querySelector ('.product-detail-close')
const cardsContainer = document.querySelector ('.cards-container');
const productList = [];



//Event functions
function toggleDesktopMenu (){
    const myOrderClosed = myOrder.classList.contains('inactive');
    if (!myOrderClosed){
        myOrder.classList.add('inactive');
    }
  desktopMenu.classList.toggle ('inactive');
}

function toggleMobileMenu (){
    const myOrderClosed = myOrder.classList.contains('inactive');
    const productDetailClosed = productDetail.classList.contains('inactive');
    if (!myOrderClosed){
        myOrder.classList.add('inactive');
    }else if (!productDetailClosed){
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle ('inactive');
}

function toggleCartIcon (){
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const productDetailClosed = productDetail.classList.contains('inactive');

    if (!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if (!desktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }else if (!productDetailClosed){
        productDetail.classList.add('inactive');
    }
    myOrder.classList.toggle ('inactive');
}

function openProductDetail(){
   myOrder.classList.add('inactive');
   productDetail.classList.remove('inactive'); 
}

function closeProductDetail(){
    productDetail.classList.add('inactive'); 
 }

//Event listeners
menuEmail.addEventListener('click', toggleDesktopMenu);

burgerMenu.addEventListener('click', toggleMobileMenu);

cartIcon.addEventListener('click', toggleCartIcon);

closeDetail.addEventListener('click', closeProductDetail);

//Array methods
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Laptop',
    price: 900,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
    name: 'Camera',
    price: 650,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});

//Functions
function renderProducts (arr){
    for (const product of arr){
    
        const productCard = document.createElement('div');
        productCard.classList.add ('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add ('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        
        cardsContainer.appendChild(productCard);
        productCard.append(productInfo, productImg);
        productInfo.append(productInfoDiv, productInfoFigure);
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild(productInfoFigureImg);
    
    }
};

renderProducts(productList); 
