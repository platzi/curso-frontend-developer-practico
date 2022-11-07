const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');

/* Event action listener en correo de ejemplo para Login*/ 
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

   desktopMenu.classList.toggle('inactive');
   shoppingCartContainer.classList.add('inactive');
}
/* Event action listener en menu mobile, lista de opciones*/ 
menuBurger.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');

}
/* Event action listener en el carrito para ver los elemenos de compra */
menuCarrito.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside(){

    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}
/* Event action listener en el detalle de compras */
productDetail.addEventListener('click', toggleProductDetail);

function toggleProductDetail(){

    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
   shoppingCartContainer.classList.add('inactive');
    menuBurger.classList.add('inactive');
}

const productsList = [];
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productsList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productsList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

const cardsContainer = document.querySelector('.cards-container');

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', toggleProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productsList);