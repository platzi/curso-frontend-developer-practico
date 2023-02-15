const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carShoppingIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


// Navbar Menu
menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('.inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('.inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle('inactive');
}


// Shopping Car
carShoppingIcon.addEventListener('click', toggleShoppingCar);

function toggleShoppingCar() {
    const isMobileMenuClosed = mobileMenu.classList.contains('.inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('.inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('.inactive');

    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

// Product Detail Aside
function openProductDetailAside(event) {
    shoppingCartContainer.classList.add('inactive');

    const productDetailImg = document.querySelector('#productDetailImg');
    const productDetailPrice = document.querySelector('#productDetailPrice');
    productDetailImg.setAttribute('src', event.target.src);
    productDetailPrice.innerText = event.target.nextElementSibling.innerText;

    productDetailContainer.classList.remove('inactive');
}

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


// Products List
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen',
    price: 450,
    image: 'https://images.pexels.com/photos/6316063/pexels-photo-6316063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Portatil',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for(product of arr) {
        // product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product-card img
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        //  product-info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        //      product-info div
        const productInfoDiv = document.createElement('div');
    
        //          product-info div p
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;
    
        //          product-info div p
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        // Agregando precio y nombre dentro del div de product-info
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        //      product-info figure
        const productInfoFigure = document.createElement('figure');
    
        //      product-info figure img
        const ProductImgCard = document.createElement('img');
        ProductImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // Agregando img dentro de figure
        productInfoFigure.appendChild(ProductImgCard);
    
        // Agregando div y figure dentro de product-info
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        // Agregando product-info e img dentro de product-card
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        // Agregando product-card dentro de cards-container
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);