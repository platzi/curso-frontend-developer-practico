const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');
const productlit = [];

productlit.push({
    name: 'pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'mouse',
    price: 60,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'teclado',
    price: 80,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
}

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imagen = document.createElement('img');
        imagen.setAttribute('src', product.image);
    
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
renderProducts(productlit);
