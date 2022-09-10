const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const btnCloseAsideDetail = document.querySelector('.product-detail-close');
const darkendBackground = document.querySelector('.darkend');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
btnCloseAsideDetail.addEventListener('click', closeAsideDetails);

function openAsideDetails(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    productDetailContainer.classList.remove('inactive');
    darkendBackground.classList.remove('inactive');
}
function closeAsideDetails(){
    productDetailContainer.classList.add('inactive');
    darkendBackground.classList.add('inactive');
}
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isDetailAsideClosed = productDetailContainer.classList.contains('inactive');
   
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (!isDetailAsideClosed) {
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isDetailAsideClosed = productDetailContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (!isDetailAsideClosed) {
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDetailAsideClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDetailAsideClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openAsideDetails);

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