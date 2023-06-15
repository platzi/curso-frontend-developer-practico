const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    } 

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    } 

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

function renderProducts(array) {
    for (product of array) {
        // Creamos el primer DIV, el padre y le agregamos luego un class
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // Creamos una img y le incluímos la imagen del producto guardado en el objeto. También se agregó un event listener para abrir la barra lateral cada vez que se hace click en la imagen
        const productoImg = document.createElement('img');
        productoImg.setAttribute('src', product.image);
        productoImg.addEventListener('click', openProductDetailAside);
    
        // Creamos un DIV hermano del img con una clase
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        // Creamos otro DIV que irá dentro del DIV anterior
        const productInfoDiv = document.createElement('div');
        
        // Creamos los párrafos que irán dentro del DIV anterior y le agregamos el texto del precio y nombre del producto
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        // Hacemos un appendChild del DIV anterior de los p para introducir los p dentro del DIV
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        // Creamos un FIgure para luego introducir dentro de este una ícono de carrito
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // Hacemos un appendChild para introducir dentro del Figure la img que contiene el ícono del carrito
        productInfoFigure.appendChild(productImgCart);
    
        // Hacemos un appendChild para introducir dentro del DIV que guardará el DIV que contiene el precio y el nombre, y luego el figure que contiene el ícono del carrito
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure)
    
        //Este es el último appendChild donde ingresamos los dos bloques grandes, primero el de la imagen del producto y luego el de la información del producto en el contenedor padre
        productCard.appendChild(productoImg);
        productCard.appendChild(productInfo);
    
        // Ya para poder visualizar cada carta del producto, le hacemos un appendChild final para ingresarlo al div del HTML que contendrá cada una de las cartas de producto
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
