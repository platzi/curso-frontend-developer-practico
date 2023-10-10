const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside )
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
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
  
    const isProductDetailClose= productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

}

function openProdcutDatailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}


function closeProductDetailAside (){
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}); 
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}); 

productList.push({
    name: 'Computador',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}); 

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}); 
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}); 

productList.push({
    name: 'Computador',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}); 

function renderProducts(arr){
    // Itera a través de cada producto en la lista de productos (productList)
for (product of arr) {
    // Crea un nuevo elemento div para representar la tarjeta de producto
    const productCard = document.createElement('div');
    productCard.classList.add('product-card'); // Agrega la clase 'product-card' al elemento

    // Crea un elemento de imagen para mostrar la imagen del producto
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image); // Establece el atributo 'src' de la imagen
    productImg.addEventListener('click',openProdcutDatailAside)
    // Crea un nuevo elemento div para la información del producto
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info'); // Agrega la clase 'product-info' al elemento

    // Crea un nuevo elemento div para la sección de información (precio y nombre) del producto
    const productInfoDiv = document.createElement('div');

    // Crea un elemento de párrafo para mostrar el precio del producto
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price; // Establece el texto del párrafo como el precio del producto

    // Crea un elemento de párrafo para mostrar el nombre del producto
    const productName = document.createElement('p');
    productName.innerText = product.name; // Establece el texto del párrafo como el nombre del producto

    // Agrega los elementos de precio y nombre al div de información
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    // Crea un elemento de figura para contener el ícono del carrito de compras
    const productInfoFigure = document.createElement('figure');

    // Crea un elemento de imagen para el ícono del carrito de compras
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); // Establece el atributo 'src' de la imagen

    // Agrega la imagen del ícono del carrito de compras a la figura
    productInfoFigure.appendChild(productImgCart);

    // Agrega el div de información y la imagen del ícono a la tarjeta de producto
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    // Agrega la imagen del producto y la información a la tarjeta de producto
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    // Agrega la tarjeta de producto al contenedor de tarjetas
    cardsContainer.appendChild(productCard);
}

}

renderProducts(productList)
