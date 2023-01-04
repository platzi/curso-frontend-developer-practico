const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuNav = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailExit = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuNav.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click', toggleShoppingCart);
productDetailExit.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    // const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    // if (!isShoppingCartClosed) {
    //     shoppingCart.classList.add('inactive');
    // }
    shoppingCart.classList.add('inactive');
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    // const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    // if (!isShoppingCartClosed) {
    //     shoppingCart.classList.add('inactive');
    // }
    shoppingCart.classList.add('inactive');
    productDetail.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    // const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    // if (!isMobileMenuClosed || !isDesktopMenuClosed) {
    //     mobileMenu.classList.add('inactive');
    //     desktopMenu.classList.add('inactive');
    // }
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    shoppingCart.classList.toggle('inactive');    
}

function toggleProductDetail() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCart.classList.add('inactive');
    productDetail.classList.toggle('inactive');
}

function openProductDetail() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCart.classList.add('inactive');
    productDetail.classList.remove('inactive');
}

function closeProductDetail() {
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Display',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Laptop',
    price: 3600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})


/*<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>*/

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
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