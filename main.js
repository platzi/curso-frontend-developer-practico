function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    if (!shoppingList.classList.contains('inactive')) {
        shoppingList.classList.toggle('inactive');
    }
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.toggle('inactive');
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingList() {
    shoppingList.classList.toggle('inactive');

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    }
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.toggle('inactive');
    }
}

function openProductDetail() {
    if (productDetail.classList.toggle('inactive')) {
        productDetail.classList.toggle('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    }
    if (!shoppingList.classList.contains('inactive')) {
        shoppingList.classList.toggle('inactive');
    }
}

function closeProductDetail() {
    productDetail.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
})
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
})
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
})

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerIcon = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const closeShopping = document.querySelector('.close-shopping');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppingList = document.querySelector('.shopping-list');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
closeMenu.addEventListener('click', toggleMobileMenu);
shoppingCar.addEventListener('click', toggleShoppingList)
closeShopping.addEventListener('click', toggleShoppingList);
productDetailClose.addEventListener('click', closeProductDetail);

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-card-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = '$' + product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv,productInfoFigure);
    productCard.append(img, productInfo)

    cardsContainer.append(productCard);
    img.addEventListener('click', openProductDetail);
}
