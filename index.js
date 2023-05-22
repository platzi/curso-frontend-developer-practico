const accountMenu = document.querySelector('.navbar-email');
const accountMenuDropdown = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

function initEventListeners() {
    accountMenu.addEventListener('click', toggleAccountMenu);
    mobileMenuIcon.addEventListener('click', toggleMobileMenu);
    cartIcon.addEventListener('click', toggleCart);
    productDetailCloseIcon.addEventListener('click', closeProductDetail);
}
function toggleAccountMenu() {
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    accountMenuDropdown.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetail();
    mobileMenu.classList.toggle('inactive');
}
function toggleCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isAccountMenuClosed = accountMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isAccountMenuClosed) {
        accountMenuDropdown.classList.add('inactive')
    }
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetail() {
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}
function closeProductDetail() {
    productDetailContainer.classList.add('inactive')
}
function renderProducts(productListArr) {
    for (const product of productListArr) {

        // Creting product image
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener('click', openProductDetail)

        // Creting product info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoContent = document.createElement('div');
        productInfoContent.classList.add('product-info-content');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `$${product.name}`;

        productInfoContent.appendChild(productPrice);
        productInfoContent.appendChild(productName);
        productInfo.appendChild(productInfoContent);

        const addToCartFigure = document.createElement('figure');
        const addToCartImg = document.createElement('img');
        addToCartImg.setAttribute('src', './icons/bt_add_to_cart.svg')
        addToCartFigure.appendChild(addToCartImg);
        productInfo.appendChild(addToCartFigure);

        // Creting product card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        // Getting cards container, append product card
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(productCard);
    }
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 5000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

initEventListeners()
renderProducts(productList)


