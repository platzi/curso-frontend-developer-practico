const menuEmail = document.querySelector('.navbar-email');
const menuHamiIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartConteiner = document.querySelector('#shoppingCartConteiner');
const productDetailConteiner = document.querySelector('#productDetail');
const cardsContaner = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamiIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu (){
    const isAsideClosed = shoppingCartConteiner.classList.contains
    ('inactive');

    if (!isAsideClosed) {
        shoppingCartConteiner.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartConteiner.classList.contains
    ('inactive');

    if (!isAsideClosed) {
        shoppingCartConteiner.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains
    ('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }else if(desktopMenu){
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailConteiner.classList.contains
    ('inactive');

    if (!isProductDetailClosed) {
        productDetailConteiner.classList.add('inactive');
    }

    shoppingCartConteiner.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartConteiner.classList.add('inactive');
    productDetailConteiner.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailConteiner.classList.add('inactive');
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
    name: 'compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
    //este for me permite imprimir todas las imagenes
for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product = {name,price,image} --> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetailAside);

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
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContaner.appendChild(productCard);
}
}

renderProducts(productList);