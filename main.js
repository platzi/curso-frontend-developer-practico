const menuEmail = document.querySelector('.navbar-email');
const menuMobileIcon = document.querySelector('.menu');
const shopingCart = document.querySelector('.navbar-shopping-cart')

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');
const closeProductDetail = document.querySelector('.product-detail-close');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
shopingCart.addEventListener('click', toggleProductInfo);
closeProductDetail.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleProductInfo(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'bike',
    price: 20,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name: 'bike',
    price: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'bike',
    price: 12,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'bike',
    price: 12,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'bike',
    price: 12,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'bike',
    price: 12,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'bike',
    price: 12,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'bike',
    price: 12,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'bike',
    price: 12,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

function renderProducts(arr){
    for(product of arr){
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
     
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside);
     
        const description = document.createElement('div');
        description.classList.add('product-info');
     
        const descriptionDiv = document.createElement('div');
     
        const descriptionPrice = document.createElement('p');
        descriptionPrice.innerText = '$' + product.price;
        const descriptionName = document.createElement('p');
        descriptionName.innerText =  product.name;
        
        
        const figureCar = document.createElement('figure');
     
        const imgCar = document.createElement('img');
        imgCar.setAttribute('src', './icons/bt_add_to_cart.svg')
     
        figureCar.append(imgCar);
        descriptionDiv.append(descriptionPrice, descriptionName);
        description.append(descriptionDiv, figureCar);
        productCart.append(img, description);
        cardsContainer.append(productCart);
     
     
        
     
     }
}
renderProducts(productList);