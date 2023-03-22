const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const asideDetailProduct = document.querySelector('.product-detail-into');
const closeDetailProductIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

emailMenu.addEventListener('click', toggleDesktopMenu);
hamMenuIcon.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartAside);
closeDetailProductIcon.addEventListener('click', closeDetailProduct);

function toggleDesktopMenu() {
    const isAsideMenuClosed = aside.classList.contains('inactive');
    
    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideMenuClosed = aside.classList.contains('inactive');
    
    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
    }
    closeDetailProduct();
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isAsideProductDetailClosed = asideDetailProduct.classList.contains('inactive');

    if(!isAsideProductDetailClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}

function openDetailProduct() {
    aside.classList.add('inactive');
    asideDetailProduct.classList.remove('inactive');
}

function closeDetailProduct() {
    asideDetailProduct.classList.add('inactive');
}

const productsList = [];
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name: 'PC Computer',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function createProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);

        img.addEventListener('click', openDetailProduct);
    }
    
}

createProducts(productsList);
