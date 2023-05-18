const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const producDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click',toggleCartAside);
productDetailIcon.addEventListener('click',closeProductDetailAsside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.toggle('inactive');
    
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.toggle('inactive');
    
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAsside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    const isMobilMenuClosed = mobileMenu.classList.toggle('inactive');

    if(!isMobilMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

    const isProductDetailClose = producDetailContainer.classList.contains('inactive');
    
    if(!isProductDetailClose) {
        producDetailContainer.classList.add('inactive');
    }

    productDetailIcon.classList.toggle('inactive');
}

function openPoductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    producDetailContainer.classList.remove('inactive');
    
}

function closeProductDetailAsside() {
    producDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
});
productList.push({
    name: "bracalet",
    price: 40,
    image: 'https://i.pinimg.com/564x/33/3f/74/333f742618de4fc8e5dfa0228be29f85.jpg'
});
productList.push({
    name: "celular",
    price: 2550,
    image: 'https://i.pinimg.com/564x/99/b9/c5/99b9c564a70fba21cf050eb60ce317c8.jpg'
});

function renderProduct(arr) {
    for(product of arr) {
        const productcard = document.createElement('div');
        productcard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openPoductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfo.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCarts = document.createElement('img');
        productImgCarts.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCarts);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productcard.appendChild(productImg);
        productcard.appendChild(productInfo)
    
        cardsContainer.appendChild(productcard)
    
    }
}

renderProduct(productList)