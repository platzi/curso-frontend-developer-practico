const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const cartProductDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleBurguerMenu);
iconCart.addEventListener('click', toggleCart);

function toggleDesktopMenu() {
    const isCartProductDetailClosed = cartProductDetail.classList.contains('inactive');
    if (!isCartProductDetailClosed) {
        cartProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleBurguerMenu() {
    const isCartProductDetailClosed = cartProductDetail.classList.contains('inactive');
    if (!isCartProductDetailClosed) {
        cartProductDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isNavEmailClosed = navEmail.classList.contains('inactive');
    if (!isMobileMenuClosed || !isNavEmailClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    cartProductDetail.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'TV',
    price: '400',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'PC',
    price: '600',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
    
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        const productInfoFigure= document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);