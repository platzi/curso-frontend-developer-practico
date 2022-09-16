const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCarContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close ')

navbarEmail.addEventListener('click', toogleDesktopMenu);
menuHamburger.addEventListener('click', toogleMobilepMenu);
cartIcon.addEventListener('click', toogleShoppingCarContainer);
productDetailClose.addEventListener('click', closeproductDetailAside);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCarContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}

function toogleMobilepMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCarContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}

function toogleShoppingCarContainer(){
    shoppingCarContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCarContainer.classList.add('inactive');
}

function closeproductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name : 'Bike',
    price : 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name : 'Pantalla',
    price : 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name : 'Computador',
    price : 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name : 'Bike',
    price : 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name : 'Pantalla',
    price : 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name : 'Computador',
    price : 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        
        //Product Info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        //Product Info Div Empty
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        //Product Figure
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //Add elements 
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfoFigure.appendChild(productImgCart);
        //Add productCard to cardsContainer Div
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);