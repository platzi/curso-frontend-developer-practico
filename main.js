/////////// VARIABLES /////////////////////////////////////////

// VARIABLES MENU EMAIL
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// VARIABLES MENU MOBILE
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//VARIABLES SHOPPING CART
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

// VARIABLE CARD CONTAINER
const cardsContainer = document.querySelector('.cards-container');

/////////// EVENTOS Y FUNCIONES /////////////////////////////////////////

// MENU EMAIL
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    productDetail.classList.add('inactive')//cierra
    desktopMenu.classList.toggle('inactive')//abre
}
// MENU MOBILE
menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    productDetail.classList.add('inactive')//cierra
    mobileMenu.classList.toggle('inactive')//abre
}
//SHOPPING CART
shoppingCart.addEventListener('click', toggleShoppingCart);
function toggleShoppingCart() {
    desktopMenu.classList.add('inactive')//cierra
    mobileMenu.classList.add('inactive')//cierra
    productDetail.classList.toggle('inactive')//abre
}

/////////// CREANDO LAS CARDS /////////////////////////////////////////

// CREANDO ARRAY
const productList = [];

// PUSH = AGREGA ELEMENTOS AL FINAL DEL ARRAY
productList.push({
    name: 'Bike',
    price: 120,
    image: './imgs/bici.jpg'
});
productList.push({
    name: 'Computer',
    price: 730,
    image: './imgs/compu.jpg'
});
productList.push({
    name: 'Phone',
    price: 450,
    image: './imgs/celu.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: './imgs/bici.jpg'
});
productList.push({
    name: 'Computer',
    price: 730,
    image: './imgs/compu.jpg'
});
productList.push({
    name: 'Phone',
    price: 450,
    image: './imgs/celu.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: './imgs/bici.jpg'
});

// CREANDO EL FOR Y SUS ELEMENTOS y lo metemos en una función
function renderProducts(arr){
    for (product of arr) {
        // Creando el div contenedor con clase product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Creando la imagen con su src
        // product = {name, price, image} -> product.image
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
    
        // Creando el div contenedor con clase product-info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        // Creando el div contenedor de los parrafos price, name, figure, img
        const productInfoDiv = document.createElement('div');
    
        // Creando el parrafo para price
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        // Creando el párrafo para name
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
    
        // Creando el figure
        const productInfoFigure = document.createElement('figure');
    
        // Creando la imagen o icono para el figure
        const productIconCart = document.createElement('img');
        productIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    


        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild(productIconCart);
        productInfo.append(productInfoFigure, productInfoDiv);
        productCard.append(ProductImg, productInfo);
        cardsContainer.appendChild(productCard);


        // Metiendo el icono en el figure
        //productInfoFigure.appendChild(productIconCart);
    
        // Metiendo en el info div el price y el name
        //productInfoDiv.appendChild(productPrice);
        //productInfoDiv.appendChild(productName);
    
        // Metiendo en el info, el info div y el info figure
       //productInfo.appendChild(productInfoDiv);
        //productInfo.appendChild(productInfoFigure);
    
        // Metiendo en la Card, el product img y el info
        //productCard.appendChild(ProductImg);
        //productCard.appendChild(productInfo);
    
        // Metiendo product card en el container general
        //cardsContainer.appendChild(productCard);
    }
}

renderProducts (productList);