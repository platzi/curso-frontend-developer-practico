const navEmail = document.querySelector('.navbar-email');
const iconMenu = document.querySelector('.desktop-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const productDetailColesIcon = document.querySelector('.product-detail-close');

const navMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingAside = document.querySelector('.shopping-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenuMobile);
iconCart.addEventListener('click', toggleShopping);
productDetailColesIcon.addEventListener('click', closeProductDetailAside)

function toggleMenu() {
    const isdestopMenuOpen = iconMenu.classList.contains('inactive');

    if(isdestopMenuOpen) {
        closeMenus();
    }
    iconMenu.classList.toggle('inactive');
}

function toggleMenuMobile() {
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive');
    if(isMobileMenuOpen) {   
        closeMenus();
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShopping() {
    const isshoppingAsideOpen = shoppingAside.classList.contains('inactive');
    if(isshoppingAsideOpen) {
        closeMenus();
    }
    shoppingAside.classList.toggle('inactive');
}

function openProductDetailAside() {
    const isProductDetailOpen = productDetailContainer.classList.contains('inactive');
    if(isProductDetailOpen) {
        closeMenus();
    }
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function closeMenus() {
    iconMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingAside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src' , product.image);
        ProductImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(ProductImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
    name: 'pantalla',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
    name: 'computador',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
    name: 'pantalla',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
    name: 'computador',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})



renderProducts(productList);