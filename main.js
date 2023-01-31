/**Traerme los elementos de HTML a Javascript */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
/*Me traigo el div "cards-container que esta en HTML" */
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



/**------------------------------------------------------------------------------------------------- */
/**Crear los eventos */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/**-------------------------------------------------------------------------------------------------- */
/**Crear las funciones de Cerrar y Abrir */
function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();/**Mando llamar la funcion de "cerrar el Product Detail" */
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isdesktopMenuClosed){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
/**---------------------------------------------------------------------------------------------------- */


/*1° Crea un Array*/ 
const productList = [];

/*2°Vamos a meterle prodctos a nuestro nuevo Array, de aquí arriba con .PUSH*/
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Pantalla',
    price:12000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Motocicleta',
    price:24000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*Voy a dejar comentado mi div del product para MAQUETARLO en el punto 3° usando JavaScript*/

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>*/

/*3° Ahora tenemos que meter nuestros productos al HTML, para eso tenemos que "recorrer" todo 
nuestro Array con un for */

                                           /**La maquetacion la metemos dentro de una funcion; se llama "renderProducts"
                                            * (arr)= el "arr" significa cualquier array, VER EL FINAL :) :) :)
                                            */
function renderProducts(arr){

    /*Usamos un Atajo for*/
for(product of arr){

    /*MAQUETAMOS */
        /** Primero: crear un div que se llame "product-card*/
        const productCard = document.createElement('div');
    
        /*Segundo: a mi nuevo div le pongo la clase "product-card" */
        productCard.classList.add('product-card');
    
    
        /**Tercero: Ahora creamos una imagen para ponerla dentro del div "product-card" */
            /**OJO: product ={name, price, image} ---> product.image   arriba ya tiene el src:http de la imagen  */
            const productImg= document.createElement('img');
    
    
            /*le metemos la imagen a img */
            productImg.setAttribute('src', product.image);
                                /**Escuchar evento "click" en la imagen creada ficticiamente en Javascript */
                                productImg.addEventListener('click', openProductDetailAside);
                                                                    /**usa "console.log" para ver */
        /*Cuarto: creamos el div "product-info" */
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    
        /*Quinto: Creamos el Div vacio para meter el precio y el nombre del producto */
        const productInfoDiv = document.createElement('div');
    
            /*Ahora creamos los 2 parrafos */
    
            /*Parrafo del precio */
            const productPrice = document.createElement('p');
            /**Usamos innerText para que se vea en el html mandamos llamar product.price */
            /*El simbolo de $ es para concatenar el precio */
            productPrice.innerText = '$' + product.price;
    
            const productName = document.createElement('p');
            productName.innerText = product.name;
    
    
        
        /*SEXTO: Ahora creamos el figure y su div-imagen */
        const productInfoFigure = document.createElement('figure');
    
    
        const productImgCart = document.createElement('img');
            /*le insertamos la imagen con el src; en este caso ponemos el link dela carpeta donde esta el ICONO
            porque la imagen NO es dinamica */
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
           
    
        /*SEPTIMO: METER de abajo hacia arriba */
             /*Metemos el productImgCart adentro del productInfoFigure */
             productInfoFigure.appendChild(productImgCart);
    
            /*Metemos el productPrice y el productName adentro del productInfoDiv */
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
    
            /*Metemos el productInfoDiv y el productInfoFigure adentro del productInfo */
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
    
            /*Metemos el productImg y el productInfo  a productCard*/
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
    
    
            
        /*OCTAVO: Ya por ultimo meto mi productCard "que es mi producto ya maquetado" adentro de cards.Container */
        cardsContainer.appendChild(productCard);
    }
}


/** Como "arr" de la funcion signifuca cualquier Array; mandamos traer al array que se llama "ProductList*/
renderProducts(productList);




