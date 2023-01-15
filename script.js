const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');


emailMenu.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetail);


function toggleDesktopMenu() {
    const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');

    if(isShoppingCartOpen) shoppingCartContainer.classList.add('inactive');

    if(isProductDetailOpen) productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu() {
    const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');

    if(isShoppingCartOpen) shoppingCartContainer.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');

    closeProductDetail();
};

function toggleCartMenu() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailAsideOpen = !productDetailContainer.classList.contains('inactive');
    
    if(isMobileMenuOpen) mobileMenu.classList.add('inactive');

    if(isDesktopMenuOpen) desktopMenu.classList.add('inactive');

    if(isProductDetailAsideOpen) productDetailContainer.classList.add('inactive');

    shoppingCartContainer.classList.toggle('inactive');
};

function openProductDetail() {
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
};

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
};

const productList = [];

productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Iphone 13',
    price: '1200',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Mac Book pro',
    price: '4000',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(array) {
    for (let product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const AddToCartIcon = document.createElement('img');
    
        AddToCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(AddToCartIcon);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
    
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    };
} 

renderProducts(productList);