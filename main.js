//---------------menu desktop-------------
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
function validProductDetailContainer(){
    if(!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive');
    }
}
function validShoppingCardContainer(){
    if(!shoppingCardContainer.classList.contains('inactive')){
        shoppingCardContainer.classList.add('inactive');
    }
}

//----------------mobile menu--------------
const mobileMenu = document.querySelector('.mobile-menu');
const iconMobileMenu = document.querySelector('.menu');

//-------------------shopping cart------------------

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
function validMobileMenu(){
    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }
}
function validDesktopMenu(){
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }
}
//---------------detalle del producto----------------

const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


//---------------menu desktop-------------

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    validShoppingCardContainer();
    validProductDetailContainer();

}

menuEmail.addEventListener('click',toggleDesktopMenu);

//----------------mobile menu--------------


function toggleMobileMenu() {
    
    mobileMenu.classList.toggle('inactive');
    validShoppingCardContainer();
    validProductDetailContainer();
}

iconMobileMenu.addEventListener('click', toggleMobileMenu);

//-------------------shopping cart------------------

function toggleProductDetailMenu() {
    
    shoppingCardContainer.classList.toggle('inactive');

    validMobileMenu();
    validDesktopMenu();
    validProductDetailContainer();
    

}

menuCarritoIcon.addEventListener('click',toggleProductDetailMenu);

//------------------products Stock-----------------

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
    name:'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});


//---------------detalle del producto----------------

function openProductDetailAside(){

    validShoppingCardContainer();
    validDesktopMenu();

    productDetailContainer.classList.remove('inactive');
}

productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function closeProductDetailAside(){
    
    productDetailContainer.classList.add('inactive');
}

//----------ingreso de productos a la lista---------

function renderProduts(arr){
    
    for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement('figure');
    
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        // ingresando los elementos dentro de sus contenedores padre//
        
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
    
        productInfoFigure.appendChild(productImgCard);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        
        cardContainer.appendChild(productCard);
    
    }

}

renderProduts(productList);

