const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

productDetailCloseIcon.addEventListener('click', closePDAside)
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleProducts);
navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (isDesktopMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu () {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (isMobileMenuClosed) { 
        shoppingCartContainer.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

}

function toggleProducts () {

    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');
    if (isShoppingCartClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

}

function openPDAside () {
    const isAsideClosed = productDetail.classList.contains('inactive');
    if (isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    } 
    productDetail.classList.remove('inactive');  
}

function closePDAside () {
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Car',
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts (arr) {
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productInfoFigure = document.createElement('figure');
    
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        const pPrice = document.createElement('p');
        pPrice.innerText = '$' + product.price;
    
        const pName = document.createElement('p');
        pName.innerText = product.name;
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openPDAside)
    
        // Appends
    
        productInfo.append(productInfoFigure, productInfoDiv);
        productCard.append(img, productInfo);
        productInfo.appendChild(productInfoFigure);
        productInfoDiv.append(pPrice, pName);
        productInfoFigure.appendChild(figureImg);
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);