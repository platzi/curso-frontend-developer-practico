const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const shoppingCar = document.querySelector ('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector ('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCar.addEventListener('click', toggleAside);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailOpen = !productDetail.classList.contains('inactive');

    if (isShoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
        }
    else if(isProductDetailOpen) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailOpen = !productDetail.classList.contains('inactive');


    if (isShoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
        }
    else if(isProductDetailOpen) {
        productDetail.classList.add('inactive');
    }
    
        mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetail.classList.contains('inactive');


    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    else if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    else if(isProductDetailOpen) {
        productDetail.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isShoppingCartContainerOpen) {
        shoppingCartContainer.classList.add('inactive');
    }

    else if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.remove('inactive');
}

function closeProductDetail() {
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name : 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name : 'Computer',
    price: 250,
    image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name : 'Sofa',
    price: 320,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts() {
    for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

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
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
