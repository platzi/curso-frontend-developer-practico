const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail-cart');
const cardContainer = document.querySelector('.cards-container');
const detalleProducto = document.querySelector('.product-detail');
const divProductInfoDetail = document.querySelector('.product-info-detail');
const closeDetailIcon = document.querySelector('.product-detail-close');
const productlist = [];

productlist.push({
    name: 'pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    detalle: 'Hermosa pantalla de 24 pulgadas, full HD IPS 75hz'
},
{
    name: 'mouse',
    price: 60,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    detalle: 'Mouse gamer de 120DPI ergonomico'
},
{
    name: 'teclado',
    price: 80,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    detalle: 'Teclado mecanico rgb blue white jerry logitech'
}
)

menuEmail.addEventListener('click', abrirMenu);
function abrirMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!menuCarrito.classList.contains('inactive')) {
        menuCarrito.classList.toggle('inactive');
    }
}

menuBurger.addEventListener('click', abrirMenuMobile);
function abrirMenuMobile() {
    mobileMenu.classList.toggle('inactive');
    if (!menuCarrito.classList.contains('inactive')) {
        menuCarrito.classList.toggle('inactive');
    }
    if (!detalleProducto.classList.contains('inactive')) {
        detalleProducto.classList.toggle('inactive');
    }
}

carrito.addEventListener('click', abrirDetalle);
function abrirDetalle() {
    menuCarrito.classList.toggle('inactive');
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    }
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    }
    if (!detalleProducto.classList.contains('inactive')) {
        detalleProducto.classList.toggle('inactive');
    }
}

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imagen = document.createElement('img');
        imagen.setAttribute('src', product.image);
        productCard.addEventListener('click', detailProduct);
        function detailProduct() {
            detalleProducto.classList.remove('inactive');
            if (!menuCarrito.classList.contains('inactive')) {
                menuCarrito.classList.toggle('inactive');
            }
            if (!mobileMenu.classList.contains('inactive')) {
                mobileMenu.classList.toggle('inactive');
            }
            // const imagen = document.createElement('img');
            // imagen.setAttribute('src', product.image);
            // const productDescription = document.createElement('p');
            // productDescription.innerText = product.desktopMenu;
            // const productPrice = document.createElement('p');
            // productPrice.innerText = '$' + product.price;
            // const productName = document.createElement('p');
            // productName.innerText = product.name;
            // detalleProducto.append(imagen);
            // divProductInfoDetail.append(productPrice, productName, productDescription);
        }

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = product.price + '$';
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productoInfoFigure = document.createElement('figure');
        const imagenLogo = document.createElement('img');
        imagenLogo.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productoInfoFigure.append(imagenLogo);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productoInfoFigure);
        productCard.append(imagen, productInfo);
        cardContainer.append(productCard);
    }
}
renderProducts(productlist);

closeDetailIcon.addEventListener('click', closeDetail);
function closeDetail() {
    detalleProducto.classList.add('inactive');
}

// productlist.addEventListener('click', test);
// function test(){
//          const productDetailClose = document.createElement('div');
//          productDetailClose.classList.add('product-detail-close');
//          const iconClose = document.createElement('img');
//          iconClose.setAttribute('src', './icons/icon_close.png');
//          const productInfoDetail = document.createElement('div');
//          productInfoDetail.classList.add('product-info-detail');
//          const addToCartButton = document.createElement('button');
//          addToCartButton.classList.add('primary-button');
//          addToCartButton.classList.add('add-to-cart-button');
//          const botonLogo = document.createElement('img');
//          botonLogo.setAttribute('src', './icons/bt_add_to_cart.svg');
//          botonLogo.setAttribute('alt', 'add to cart');
//          const descriptionProduct = document.createElement('p');
//          descriptionProduct.innerText = product.detalle;
//          addToCartButton.append(botonLogo);
//          productInfoDetail.append(productPrice, productName, descriptionProduct, addToCartButton);
//          productDetailClose.append(iconClose);
//          detalleProducto.append(productDetailClose, imagen, productInfoDetail);
//          detalleProducto.classList.toggle('inactive');
// }
