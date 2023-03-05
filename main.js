const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileIcon = document.querySelector('.menu-icon');
const productDetailClose = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('#shoppingCart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingMenu);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isShoppingMenuClosed = shoppingMenu.classList.contains('inactive');
    const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive');

    if (!isShoppingMenuClosed) {
        shoppingMenu.classList.add('inactive');
    } else if (!isProductDetailAsideClosed) {
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingMenuClosed = shoppingMenu.classList.contains('inactive');
    const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive');

    if (!isShoppingMenuClosed) {
        shoppingMenu.classList.add('inactive');
    } else if (!isProductDetailAsideClosed) {
        productDetailContainer.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingMenu() {
    const isMovileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive');

    if (!isMovileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }  else if (!isProductDetailAsideClosed) {
        productDetailContainer.classList.add('inactive');
    }


    shoppingMenu.classList.toggle('inactive');
    
}
function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {

    const isShoppingMenuClosed = shoppingMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isShoppingMenuClosed){
        shoppingMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }


    productDetailContainer.classList.add('inactive');
}


const productList = [];

productList.push({
    name: "Bike",
    price: 120, 
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "TV",
    price: 1200, 
    image: "https://images.pexels.com/photos/13806260/pexels-photo-13806260.jpeg"
})
productList.push({
    name: "Laptop",
    price: 4120, 
    image: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Glasses",
    price: 20, 
    image: "https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Camera",
    price: 1500, 
    image: "https://images.pexels.com/photos/15613791/pexels-photo-15613791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Helmet",
    price: 4120, 
    image: "https://images.pexels.com/photos/4992710/pexels-photo-4992710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Motorcycle",
    price: 4120, 
    image: "https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Hat",
    price: 20, 
    image: "https://images.pexels.com/photos/13710027/pexels-photo-13710027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Watch",
    price: 1500, 
    image: "https://images.pexels.com/photos/6489728/pexels-photo-6489728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Coffee Maker",
    price: 4120, 
    image: "https://images.pexels.com/photos/593328/pexels-photo-593328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);;
        
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }  
}

renderProducts(productList);
