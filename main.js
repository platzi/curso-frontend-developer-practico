// Función que permite abreviar y agilizar el querySelector
const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const burguerMenu = $('.menu');
const mobileMenu = $('.mobile-menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const aside = $('.product-detail');
const cardsContainer = $('.cards-container')

// ESCUCHA EL EVENTO CLICK
menuEmail.addEventListener('click', toggledesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAside);

// REVISA SI EL ATRIBUTO 'inactive' SE ENCUENTRA PUESTO AL ELEMENTO
const isAsideClose = aside.classList.contains('inactive');
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
const isdesktopMenuClose = desktopMenu.classList.contains('inactive');

// MUESTRA UNA SECCIÓN Y ESCONDE LAS DEMÁS
function toggledesktopMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    aside.classList.toggle('inactive');
}

// CREANDO LISTA DE PRODUCTOS
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

// FUNCION QUE RENDERIZA LOS PRODUCTOS EN EL HTML
function renderProduct(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
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

// LLAMANDO LA FUNCION PARA RENDERIZAR LOS PRODUCTOS
renderProduct(productLIst);

// Verificar que el JS este conectado al
console.log('/// JS Funcionando... ///');