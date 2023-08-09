const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLine = document.querySelector('mobile-menu ul:nth-child(1)');
const menuShopppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('#shoppingCartContainer');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuShopppingCartIcon.addEventListener('click', toggleShoppingCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('active');
    const isProductDetailContainerClosed = shoppingCartMenu.classList.contains('inactive');

    if (!isShoppingCartMenuClosed) {
        shoppingCartMenu.classList.add('inactive')
    }

    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('active');
        mobileMenuLine.classList.remove('active');
    }

    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.replace('active', 'inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailContainerClosed = shoppingCartMenu.classList.contains('inactive');

    if (!isShoppingCartMenuClosed) {
        shoppingCartMenu.classList.add('inactive');
    }

    if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.replace('active', 'inactive')
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle('active');
    mobileMenuLine.classList.toggle('active');
}

function toggleShoppingCartMenu() {
    const isProductDetailContainerOpen = shoppingCartMenu.classList.contains('active');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('active');

    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('active');
        mobileMenuLine.classList.remove('active');
    }

    if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive')
    }
    
    if (isProductDetailContainerOpen) {
        productDetailContainer.classList.remove('active')
        productDetailContainer.classList.add('inactive')
    }

    closeProductDetailAside()

    if (shoppingCartMenu.classList.contains('inactive')) {
        shoppingCartMenu.classList.replace('inactive', 'active')
    } else if (shoppingCartMenu.classList.contains('active')) {
        shoppingCartMenu.classList.replace('active', 'inactive')
    }
}

function openProductDetailAside() {
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

    if (!isShoppingCartMenuClosed) {
        shoppingCartMenu.classList.replace('active', 'inactive')
    }

    if (productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.replace('inactive', 'active')
    } else if (productDetailContainer.classList.contains('active')) {
        productDetailContainer.classList.replace('active', 'inactive')
    }
}

function closeProductDetailAside() {
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

    

    productDetailContainer.classList.add('inactive');
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
        productImg.addEventListener('click', openProductDetailAside)
    
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