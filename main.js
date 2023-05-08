const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}
/*
function toggleCarritoAside() {
    aside.classList.toggle('inactive');
}*/
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive');
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 30,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'vase',
    price: 20,
    image: 'https://images.pexels.com/photos/276521/pexels-photo-276521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'lamp',
    price: 15,
    image: 'https://images.pexels.com/photos/276524/pexels-photo-276524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'Bike',
    price: 30,
    image: 'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'vase',
    price: 20,
    image: 'https://images.pexels.com/photos/276541/pexels-photo-276541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'lamp',
    price: 15,
    image: 'https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'Bike',
    price: 30,
    image: 'https://images.pexels.com/photos/276537/pexels-photo-276537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'vase',
    price: 20,
    image: 'https://images.pexels.com/photos/276544/pexels-photo-276544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'lamp',
    price: 15,
    image: 'https://images.pexels.com/photos/276599/pexels-photo-276599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'Bike',
    price: 30,
    image: 'https://images.pexels.com/photos/276511/pexels-photo-276511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'vase',
    price: 20,
    image: 'https://images.pexels.com/photos/276510/pexels-photo-276510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
})
productList.push({
    name: 'lamp',
    price: 15,
    image: 'https://images.pexels.com/photos/276529/pexels-photo-276529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
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

renderProducts(productList);

