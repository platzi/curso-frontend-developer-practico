const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuBurger = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const shoppingCart = document.querySelector ('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector ('#shoppingCartContainer');
const cardsContainer = document.querySelector ('.cards-container');
const productDetailContainer = document.querySelector ('#productDetail');
const productDetailCloseIcon = document.querySelector ('.product-detail-close');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleshoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);



function toggleDesktopMenu() {
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains ('inactive');

    if (!isshoppingCartContainerClose) {
        shoppingCartContainer.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }



    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains ('inactive');

    if (!isshoppingCartContainerClose) {
        shoppingCartContainer.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleshoppingCartContainer() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClose) {
        desktopMenu.classList.add ('inactive');
    }
  
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
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
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'PC GAMER',
    price: 620,
    image: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
    name: 'TV PLUS',
    price: 220,
    image: 'https://images.pexels.com/photos/17233395/pexels-photo-17233395/free-photo-of-flores-vintage-retro-television.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement ('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener ('click', openProductDetailAside);
    
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
