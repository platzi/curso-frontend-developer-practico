const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburger_menu = document.querySelector('.menu_hamburger');
const carrito_menu = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailClose = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
hamburger_menu.addEventListener('click', toggleMobileMenu);
carrito_menu.addEventListener('click', toggleCarritoshoppingCartContainer);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isshoppingCartContainerMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerMenuClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isshoppingCartContainerMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerMenuClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

const producList = [];
producList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

producList.push({
    name: 'Bilke',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

producList.push({
    name: 'cike',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}); 

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productimg = document.createElement('img');
        productimg.setAttribute('src', product.image);
        productimg.addEventListener('click', openProductDetailAside)
    
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
        const productInfoFigureImg = document.createElement('productimg');
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoFigureImg);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productimg, productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(producList);

