const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart')

const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')
const cardDescriptionContainer = document.querySelector('.card-description-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart)


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
};

function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
};

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
};

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');

};

const productList = [];
productList.push({
    id: 1,
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Esta es una bici nueva marca Raly'

});
productList.push({
    id: 2,
    name: 'Pantalla',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Esta es una pantalla nueva marca Samsung'
});
productList.push({
    id: 3,
    name: 'PC',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Esta es una PC usada marca Dell'
});

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
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);

// Experimentos que aún no funcionan


function renderProductDescription(arr) {
    for (product of arr) {
        const productDetailClose = document.createElement('div');
        productDetailClose.classList.add('product-detail-close');
        productDetailClose.addEventListener('click', closeProductDetailAside)

        const productImgCloseIcon = document.createElement('img');
        productImgCloseIcon.setAttribute('src', './icons/icon_close.png');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.classList.add('product-image');
        
        const productInfoDivDescription = document.createElement('div');
        productInfoDivDescription.classList.add('product-info')

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p');
        productName.innerText = product.name
        const productDescription = document.createElement('p');
        productDescription.innerText = product.description

        const buttonAddToCart = document.createElement('button');
        buttonAddToCart.classList.add('primary-button', 'add-to-cart-button');
        const buttonAddToCartText = document.createTextNode('Agregar al carrito');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        buttonAddToCart.appendChild(productImgCart)
        buttonAddToCart.appendChild(buttonAddToCartText)
        
        productInfoDivDescription.appendChild(productPrice)
        productInfoDivDescription.appendChild(productName)
        productInfoDivDescription.appendChild(productDescription)
        productInfoDivDescription.appendChild(buttonAddToCart)

        productDetailClose.appendChild(productImgCloseIcon)

        cardDescriptionContainer.appendChild(productImg)
        cardDescriptionContainer.appendChild(productInfoDivDescription)
        cardDescriptionContainer.appendChild(productDetailClose)

    }
}


renderProductDescription(productList);

// Aca es una forma de abrir los productos que creo que puede funcionar mejor que la de arriba, pero aun no la entiendo.

// const productDescription = `
//     <div class="product-detail-close">
//         <img src="./icons/icon_close.png" alt="close">
//     </div>
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
//     <div class="product-info">
//         <p>$35,00</p>
//         <p>Bike</p>
//         <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
//         <button class="primary-button add-to-cart-button">
//             <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
//             Add to cart
//         </button>
//     </div>`;

// productImg.addEventListener('click', renderProductDescription);
// function renderProductDescription(){
//     console.log('open product')
// };