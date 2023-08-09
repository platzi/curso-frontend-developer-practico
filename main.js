const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLine = document.querySelector('mobile-menu ul:nth-child(1)');
const menuShopppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuShopppingCartIcon.addEventListener('click', toggleShoppingCartMenu);

function toggleDesktopMenu() {
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('active');

    if (!isShoppingCartMenuClosed) {
        shoppingCartMenu.classList.add('inactive')
    }

    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('active');
        mobileMenuLine.classList.remove('active');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('active');

    if (!isShoppingCartMenuClosed) {
        shoppingCartMenu.classList.add('inactive');
    }

    if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('active');
    mobileMenuLine.classList.toggle('active');
}

function toggleShoppingCartMenu() {
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('active');

    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('active');
        mobileMenuLine.classList.remove('active');
    }

    if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive')
    }
    
    if (shoppingCartMenu.classList.contains('inactive')) {
        shoppingCartMenu.classList.replace('inactive', 'active')
    } else if (shoppingCartMenu.classList.contains('active')) {
        shoppingCartMenu.classList.replace('active', 'inactive')
    }
}

const productList = [];
productList.push({
    name: 'Bitcoin Diamond',
    price: 0.06,
    image: './icons/bcd.svg'
});
productList.push({
    name: 'SushiSwap',
    price: 0.71,
    image: './icons/sushi.svg',
});
productList.push({
    name: 'Uniswap',
    price: 6.12,
    image: './icons/uni.svg',
});
productList.push({
    name: 'Santiment Network Token',
    price: 0.06,
    image: './icons/san.svg',
});
productList.push({
    name: '1inch Network',
    price: 0.30,
    image: './icons/1inch.svg',
});
productList.push({
    name: 'SafeMoon',
    price: 0.000005,
    image: './icons/safemoon.svg',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);