const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');

const darken = document.querySelector('.darken');

/* Event action listener en correo de ejemplo para Login*/ 
menuEmail.addEventListener('click', toggleDesktopMenu);
/* Event action listener en menu mobile, lista de opciones*/ 
menuBurger.addEventListener('click', toggleMobileMenu);
/* Event action listener en el carrito para ver los elemenos de compra */
menuCarrito.addEventListener('click', toggleCarritoAside);
/* Event action listener en el detalle de compras */
productDetail.addEventListener('click', toggleProductDetail);

darken.addEventListener('click', hideAll);


function toggleDesktopMenu(){

   desktopMenu.classList.toggle('inactive');
   shoppingCartContainer.classList.add('inactive');
}

function toggleMobileMenu(){

    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');

}

function toggleCarritoAside(){

    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    darken.classList.add('inactive');
}

function toggleProductDetail(){

    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
   shoppingCartContainer.classList.add('inactive');
    menuBurger.classList.add('inactive');
}

function hideAll(){
    darken.classList.remove('inactive')
}

const productsList = [];
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://cyclingtips.com/wp-content/uploads/2022/04/Best-bike-for-Paris-Roubaix-with-suspension-forks-22.jpg'
});

productsList.push({
    name: 'Tesla',
    price: 220,
    image: 'https://i.insider.com/60f860760729770012b91c62?width=1000&format=jpeg&auto=webp'
});

productsList.push({
    name: 'Motorcycle',
    price: 620,
    image: 'https://http2.mlstatic.com/D_NQ_NP_828920-MCO51966348182_102022-UC.webp'
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