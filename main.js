//variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('#shoppingCartContainer');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const containerCard = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClosedIcon = document.querySelector('.product-detail-close');

//llamadas para eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCarMenu);
productDetailClosedIcon.addEventListener('click', productDetailClosedContainer);



//Funciones
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCarClosed =  menuShoppingCart.classList.contains('inactive');
    const isProductDetailtClosed = productDetailContainer.classList.contains('inactive');

    if(!isShoppingCarClosed){
        menuShoppingCart.classList.add('inactive');
    }

    if(!isProductDetailtClosed){
        productDetailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCarMenu(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailtClosed = productDetailContainer.classList.contains('inactive');

    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    if(!isProductDetailtClosed){
        productDetailContainer.classList.add('inactive');
    }

    menuShoppingCart.classList.toggle('inactive')
}

function openProductDetailAside(){
    menuShoppingCart.classList.add('inactive');
    productDetailContainer.classList.remove('inactive')
}

function productDetailClosedContainer(){
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});

productList.push({
    name:'Pantalla',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});

productList.push({
    name:'Computador',
    price:620,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});

function renderProducts(arr){
    for (product of arr){
   
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
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const imgAdd = document.createElement('img');
        imgAdd.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(imgAdd);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        containerCard.appendChild(productCard);
    }
}

renderProducts(productList);