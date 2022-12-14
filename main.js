//todo Función que permite abreviar y agilizar el querySelector
const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const burguerMenu = $('.menu');
const mobileMenu = $('.mobile-menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const shoopingCard = $('#shoppingCartContainer');
const cardsContainer = $('.cards-container')
const productDetailContainer = $('#productDetail')
const productDetailCloseIcon = $('.product-detail-close')

//todo ESCUCHA EL EVENTO CLICK
menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShoopingCard);
productDetailCloseIcon.addEventListener('click', closeProductDetail)

//todo REVISA SI EL ATRIBUTO 'inactive' SE ENCUENTRA PUESTO AL ELEMENTO
const isShoopingCardClose = shoopingCard.classList.contains('inactive');
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
const isdesktopMenuClose = desktopMenu.classList.contains('inactive');

//todo MUESTRA UNA SECCIÓN Y ESCONDE LAS DEMÁS
function toggleDesktopMenu() {
    shoopingCard.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    shoopingCard.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toggleShoopingCard() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    shoopingCard.classList.toggle('inactive');
}

function openProductDetail() {
    shoopingCard.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    productDetailContainer.classList.remove('inactive')
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive')
}

//todo CREANDO LISTA DE PRODUCTOS
const productLIst = [];
productLIst.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productLIst.push({
    name: 'Pantalla',
    price: 350,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productLIst.push({
    name: 'Macbook',
    price: 1200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

//todo FUNCION QUE RENDERIZA LOS PRODUCTOS EN EL HTML
function renderProduct(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}


//todo LLAMANDO LA FUNCION PARA RENDERIZAR LOS PRODUCTOS
renderProduct(productLIst);

//todo Verificar que el JS este conectado al
console.log('/// JS Funcionando... ///');