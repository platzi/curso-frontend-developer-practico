

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

//Contenedor de detalles
const productDetailContainer = document.querySelector('#productDetail');
//Icono de cerrar contenedor de detalles
const productDetailCloseIcon = document.querySelector('.product-detail-close');






//ASIGNACIÓN DE EVENTOS

//click al menu desktop
menuEmail.addEventListener('click', toggleDesktopMenu);

//click al menu hamburguesa
burguerMenu.addEventListener('click', toggleMobileMenu);


//Click al icono del carrito
iconoCarrito.addEventListener('click', toggleCarritoAside);


//Cerrar contenedor de detalles
productDetailCloseIcon.addEventListener('click', closeProductDetail);






//////////////////////////////////////////////////////////////////

//DEFINICION DE FUNCIONES/////////////////////////////////////
function toggleDesktopMenu(){

    //Solapamiento con Carrito
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }


    //Solapamiento con details
    productDetailContainer.classList.add('inactive');

    
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
 
    //Cerramos detail
    closeProductDetail();

    
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

    //Solapamiento con details, al dar click en carrito
    //se cierra el detail
    const isProductDetailClosed = productDetailContainer.
    classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}


function openProductDetail() {

    //Siempre que abramos details sampamos inactive al carrito
    shoppingCartContainer.classList.add('inactive');


    //solapamiento con desktop-menu
    deskTopMenu.classList.add('inactive');


    //para que aparezca quitamos clase inactive
    productDetailContainer.classList.remove('inactive');
}


function closeProductDetail() {

    //para que desaparezca agregamos clase inactive
    productDetailContainer.classList.add('inactive');
}



////////////////////////////////////////////////////////////




/*CREACION LISTA DE PRODUCTOS */


//Construimos array de prueba con 3 elementos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '1 With its practical position, this bike also fulfills a decorative function, add your hall or workspace'
});
productList.push({
    name: 'Pantalla',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '2 With its practical position, this bike also fulfills a decorative function, add your hall or workspace'
});
productList.push({
    name: 'Producto 3',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: '3 With its practical position, this bike also fulfills a decorative function, add your hall or workspace'
});






//Fabricacion de tarjetas

//Aplicamos el for a cada elemento del productList
function renderProducts(array){

    indexControl = -1;
    for (product of array) {
        
        //Para emparejar con detailCard
        indexControl += 1;
        
        
        //ELEMENTOS LISTA DE PRODUCTOS

        //creamos div contenedor de clase product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        

        //Controlamos el .dataset.index
        productCard.setAttribute("data-index", indexControl);

        




        //creamos la imagen asociada al producto
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        //Asignamos clase para el pointer
        productImg.classList.add('productImg');
        
        //Asignamos evento click a la imagen
        productImg.addEventListener('click', openProductDetail);



    
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


const detailContainer = document.querySelector('.detail-container');

function createDetailCards(array){
    
    indexControl = -1;
    for (product of array) {        
        
        indexControl += 1;

        //ASIDE
        const detailCard = document.createElement('aside');
        detailCard.classList.add('inactive');
        detailCard.id = "productDetail";
        //Completo



        //CONTROL EMPAREJAMIENTO
        detailCard.setAttribute("data-index", indexControl);


        //PARTE 1
        const detailCloseContainer = document.createElement('div');
        detailCloseContainer.classList.add('product-detail-close');

        const detailCloseIcon = document.createElement('img');
        detailCloseIcon.setAttribute('src', "./icons/icon_close.png");
        detailCloseIcon.setAttribute('alt', "close");

        //Completo
        detailCloseContainer.appendChild(detailCloseIcon);




        //PARTE 2
        const detailProductImg = document.createElement('img');
        detailProductImg.setAttribute('src', product.image);
        



        //PARTE 3
        const detailInfo = document.createElement('div');
        detailInfo.classList.add('product-info');

        //Precio
        const detailPrice = document.createElement('p');
        detailPrice.innerText = product.price;
        detailInfo.appendChild(detailPrice);

        //Name
        const detailName = document.createElement('p');
        detailName.innerText = product.name;
        detailInfo.appendChild(detailName);
        
        //Description
        const detailDescription = document.createElement('p');
        detailDescription.innerText = product.description;
        detailInfo.appendChild(detailDescription);
        
        //Button;////////////////////////////////
        const detailButton = document.createElement('button');
        detailButton.classList.add('primary-button');
        detailButton.classList.add('add-to-cart-button');
        

        detailButton.innerHTML = '<img src="./icons/bt_add_to_cart.svg" alt="add to cart"> Add to cart';

        detailInfo.appendChild(detailButton);
        /////////////////////////////////////////////////////


        //INTODUCIMOS PARTE 1, 2 y 3
        detailCard.appendChild(detailCloseContainer);
        detailCard.appendChild(detailProductImg);
        detailCard.appendChild(detailInfo);

        //Metemos tarjeta en el html
        detailContainer.appendChild(detailCard);
    }
}

createDetailCards(productList);



function eventClickProd_Detail(){}



