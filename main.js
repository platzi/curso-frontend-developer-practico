const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productDetailImage = document.querySelector('.product-detail-images');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

burgerMenu.addEventListener('click', toggleMobileMenu)

//si el mobile menu está activo, el shoppingCartContainer se inactivará viceversa
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

menuCart.addEventListener('click', toggleCart);

//si el shoppingCartContainer está activo, el mobile menu se inactivará viceversa
function toggleCart() {
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

productDetailCloseIcon.addEventListener('click', closeProducDetailContainer)

function closeProducDetailContainer() {
    productDetailContainer.classList.add('inactive');
}

function openProductDetail() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://www.semana.com/resizer/z0M4DEd_89U23nS-4h-CZvklyTc=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/LIGD6QNQLRC7LPJVQNE6A7NZMM.jpeg',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://fotografias.lasexta.com/clipping/cmsimages01/2021/08/04/F80CD976-6299-407D-AF0D-14F40A563A19/98.jpg?crop=1300,731,x0,y7&width=1900&height=1069&optimize=high&format=webply',
});

productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://e.rpp-noticias.io/xlarge/2022/03/16/241224_1232803.jpg',
});

productList.push({
    name: 'Celular',
    price: 300,
    image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2020/11/smartphones-2020.jpg?fit=1280%2C720&quality=80&ssl=1',
});

function renderProducts(arr) {
    var index = 0;
    for (product of arr) {
        index++;
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.style.cursor = 'pointer';
        productImg.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard);
        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}


renderProducts(productList);