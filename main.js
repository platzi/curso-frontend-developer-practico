const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailAside = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');



menuHamIcon.addEventListener('click',toggleMobilMenu)
menuEmail.addEventListener('click',toggleDesktopMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);




function toggleDesktopMenu(){

    const isMenuDesktopClosed =   shoppingCartContainer.classList.toggle('inactive');
    
    if(!isMenuDesktopClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu(){
    const isAsideMenuClosed =   shoppingCartContainer.classList.toggle('inactive');
    
    if(!isAsideMenuClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    // closeProductDetailAside();
    mobilMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobilMenuClosed =   mobilMenu.classList.contains('inactive');
    
    if(!isMobilMenuClosed){
        mobilMenu.classList.add('inactive');
    }

    const isProductDetailClosed =   productDetailAside.classList.contains('inactive');
    
    if(!isProductDetailClosed){
        productDetailAside.classList.add('inactive');
    }
    
    
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {

    shoppingCartContainer.classList.add('inactive');

    productDetailAside.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailAside.classList.add('inactive');
}

const productList = [];

productList.push({
    name:'bike',
    precio: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

productList.push({
    name:'moto',
    precio: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

productList.push({
    name:'car',
    precio: 20,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});


function renderProduct(arry){

    for(product of arry){
        const cardsContainer = document.querySelector('.cards-container');
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        
        img.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText= "$" + product.precio;
        const productName = document.createElement('p');    
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    
    }
}

renderProduct(productList);