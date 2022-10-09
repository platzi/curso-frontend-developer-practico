const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleCart);
productDetailClose.addEventListener('click', closeProductDetail);


function toggleMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Screen',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Playstation5',
    price: 900,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Table',
    price: 1400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function openProductDetail() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

{/* 
    <div class="product-card">
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
    </div>
*/}

function renderProducts(products) {
    for (product of products) {
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
    
        const productFigure = document.createElement('figure');
        
        const productImage = document.createElement('img');
        productImage.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productFigure.appendChild(productImage);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
