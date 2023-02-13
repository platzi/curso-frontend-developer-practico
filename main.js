const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const asideShoppingCar = document.querySelector('.shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail-container');
const iconCloseProductDetail = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
carIcon.addEventListener('click',toogleAsideShoppingCar);
iconCloseProductDetail.addEventListener('click', closeProductDetailAsaid);

function toogleDesktopMenu(){
    asideShoppingCar.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    desktopMenu.classList.add('inactive');
    asideShoppingCar.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
    mobileMenu.classList.toggle('inactive');
}

function toogleAsideShoppingCar(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    asideShoppingCar.classList.toggle('inactive');
}

function openProductDetailAsaid(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideShoppingCar.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAsaid(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Bike',
    precio: 120
});

productList.push({
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Pantalla',
    precio: 300
});

productList.push({
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Laptop',
    precio: 1200
});

function renderProducts(productList){

    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.imagen);
        img.addEventListener('click',openProductDetailAsaid);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.precio;
    
       
        const productInfoFigure = document.createElement('figure');
    
        const ProductImgIconCart = document.createElement('img');
        ProductImgIconCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    
        productInfoFigure.appendChild(ProductImgIconCart);
        
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        productInfo.appendChild(productInfoDiv);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
    
}

renderProducts(productList);