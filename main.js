const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const mobileMenu = $('.mobile-menu');
const iconMenu = $('.menu');
const iconCart = $('.navbar-shopping-cart');
const shoppingCartContainer = $('#shoppingCartContainer');
const cardsContainer = $('.cards-container');

menuEmail.addEventListener('click', toogleDesktopMenu);
iconMenu.addEventListener('click', tooglemobileMenu);
iconCart.addEventListener('click', tooglecarritoAside);


function toogleDesktopMenu () {
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function tooglemobileMenu () {
    const isshoppingCartContainer = shoppingCartContainer.classList.contains('inactive');
    if(!isshoppingCartContainer){
        shoppingCartContainer.classList.add('inactive');
    }   
    mobileMenu.classList.toggle('inactive');
}
function tooglecarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed || !isDesktopMenuClosed){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    precio: 220,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computador',
    precio: 320,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    precio: 220,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computador',
    precio: 320,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
    for (product of arr){ /* maqueto la estructura de una card de html */
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.imagen);

    const productinfo = document.createElement('div');
    productinfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' +  product.precio;
    const productName =document.createElement('p');
    productName.innerText = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const ProductImgCart = document.createElement('img');
    ProductImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(ProductImgCart);

    productinfo.appendChild(productInfoDiv);
    productinfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productinfo);
    
    cardsContainer.appendChild(productCard);
}
}
renderProducts(productList);




