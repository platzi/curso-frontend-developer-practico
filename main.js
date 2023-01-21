

//CAPTURAS DEL DOM


//el boton que contiene el email
const menuEmail = document.querySelector('.navbar-email');

//menu desktop
const deskTopMenu = document.querySelector('.desktop-menu');


//contenedor de tarjetas de producto
const cardsContainer = document.querySelector('.cards-container');



//menu hamburguesa
const burguerMenu = document.querySelector('.menu');

//menu mobile
const mobileMenu = document.querySelector('.mobile-menu');



//Icono carrito
const iconoCarrito = document.querySelector('.navbar-shopping-cart');

//Menu asociado al Carrito
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
//shoppingCartContainer





//ADICION DE EVENTOS

//click al menu desktop
menuEmail.addEventListener('click', toggleDesktopMenu);

//click al menu hamburguesa
burguerMenu.addEventListener('click', toggleMobileMenu);


//Click al icono del carrito
iconoCarrito.addEventListener('click', toggleCarritoAside);


//DEFINICION DE FUNCIONES
function toggleDesktopMenu(){

    //Solapamiento con Carrito
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
    deskTopMenu.classList.toggle('inactive');
}


//Recordamos que se activa con click en el menuHamburguer
function toggleMobileMenu() {
   
    //Identificamos si esta cerrado el menuCarrito
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    //Preguntamos si el menuCarrito esta abierto
    if(!isAsideClosed){

        //lo cerramos
        shoppingCartContainer.classList.add('inactive');
    }
 
    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside() {

    //Solapamiento con Mobile
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    //Solapamiento con desktopMenu
    const isDesktopMenuClosed = deskTopMenu.classList.contains('inactive');
    if(!isDesktopMenuClosed){
        deskTopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}



/*CREACION LISTA DE PRODUCTOS */


//Construimos array de prueba con 3 elementos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Producto 3',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


//Fabricacion de tarjetas

//Aplicamos el for a cada elemento del productList
function renderProducts(array){

    for (product of array) {
    
        //creamos div contenedor de clase product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //creamos la imagen asociada al producto
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        //En la estruc base, creamos el product-info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        //Div que contiene precio y nombre
        const productInfoDiv = document.createElement('div');
        
        //Lugar del precio
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
        //Metemos precio en el infoDiv
        productInfoDiv.appendChild(productPrice);
    
        //Lugar del nombre
        const productName = document.createElement('p');
        productName.innerText = product.name;
        //Metemos name en el infoDiv
        productInfoDiv.appendChild(productName);
    
        //Creamos etiqueta figure de la estructura
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //Metemos el icono de carrito en el figure
        productInfoFigure.appendChild(productImgCart);
    
        //////////////////////
        //Ingresamos el infoDiv y el infoFigure al productInfo
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        
        //Ingresamos productInfo y la img en product-card
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    
        //Aca terminamos fabricacion de tarjeta ahora la
        //Ingresamos al contenedor de tarjetas en el html
        cardsContainer.appendChild(productCard);
    }

}

renderProducts(productList);



