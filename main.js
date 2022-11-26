const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const btnCart = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

//menu desplegable que sale del email (usando una clase de css inactive)
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

//menu desplegable que sale del menu hamburgueza (usando una clase de css inactive) , no hace falta tocar los @media ya que el menu hamburguesa solo aparece cuando esta en mobile

//@media hace falta para evitar que se queden los menus abiertos si cambian de desktop a mobile

iconMenu.addEventListener('click', toggleMobilMenu);

function toggleMobilMenu() {
    mobileMenu.classList.toggle('inactive');
    // El add inactive se usa para obligar a cerrar cualquier otra cosa que no deba estar abierta al mismo tiempo
    aside.classList.add('inactive');
}

// Carrito de compras -My order-

btnCart.addEventListener('click', toggleCart);

function toggleCart() {

    aside.classList.toggle ('inactive');
    //// El add inactive se usa para obligar a cerrar cualquier otra cosa que no deba estar abierta al mismo tiempo
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

// creoo las card desde JS que mas adelante se conectan a bases de datos, por ahora la completo a mano

const productList = [];
productList.push({
    name: 'Bike',
    price: 120.00 ,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',  
});
productList.push({
    name: 'Computer',
    price: 100 ,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Tv Led',
    price: 220 , 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//insertar en el html (al crearlo en un funcion nos permite llamarlo en cualquier lado ademas de mas opciones de uso)
function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute ('src' , product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add ('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute ('src' ,'./icons/bt_add_to_cart.svg');
    
        //para meter un elemento dentro de otro "appendChild"
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts (productList);