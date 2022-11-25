const menuEmail = document.querySelector('.navbar-email');
const hamburguerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {    
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 118,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 389,
    image: 'https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 118,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 389,
    image: 'https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 118,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 389,
    image: 'https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 118,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 389,
    image: 'https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click', openProductDetailAside);
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
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

renderProducts(productList)