
/* Click sobre */
const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector('.product-detail-close');

/*Menus despligables*/
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopingCartContainer = document.querySelector("#shopingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailAside = document.querySelector('#productDentail') ;

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritopAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu () {
    const isAsideClosed =  shopingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shopingCartContainer.classList.add('inactive');
    }
    /* Cerramos el asi de detalle de venta */
    closeProductDetailAside ()

    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu ()  {
    const isAsideClosed =  shopingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shopingCartContainer.classList.add('inactive');
    }

    /* Cerramos el detalle del producto o aside cuando se abra el mobileMenu */
    productDetailAside.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritopAside ()  {
    const isMobileMenuClosed =  mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    /* Cerramos el detalle del producto o aside cuando se abra el mobileMenu */
    productDetailAside.classList.add('inactive');

    shopingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside () {
    productDetailAside.classList.remove('inactive');

    /* Cerramos el aside del carrito */
    shopingCartContainer.classList.add('inactive');

    /* Cerramos el mobile Menu */
    desktopMenu.classList.add('inactive');
}

function closeProductDetailAside () {
    productDetailAside.classList.add('inactive');
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
})
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr){
    for (product of arr){
    // Creamos div, con clase product-card 
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.addEventListener('click', openProductDetailAside);

    // Creamos img, con la ruta del array llamado 
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    // Creamos div con la clase product-info 
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    // Creamos div que contiene p de precio y de nombre del producto 
    const productInfoDiv = document.createElement('div');
    
    // Creamos p de precio y p de nombre producto 
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    // Posicionamos elemento dentro de cada elemento
    // de ser neceario
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    // Creamos el figure
    const productInfoFigure = document.createElement('figure');

    // Creamos la imagen que  va dentro de figure 
    const productImgCard = document.createElement('img');
    // Creamos la imagen de carrito que no cambia 
    productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');

    // Posicionamos elemento dentro de cada elemento
    // de ser neceario

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);

