// general

// const mainContainer = document.querySelector('.container');

// desktop ///////////////////////////////////////////

// boton para mostrar u ocultar el desktop menu
const navbarEmail = document.querySelector('.navbar-email');
// desktop menu
const desktopMenu = document.querySelector('.desktop-menu');

///////// mobile //////////////////////////////////////////////////

// icono hamburguesa - boton
const burgerIcon = document.querySelector('.menu')
// mobile menu - menu desplegable
const mobileMenu = document.querySelector('.mobile-menu');

/// aside shopping cart ///////////////////////////////////////////
// boton shopping cart 
const shoppingCart = document.querySelector('.navbar-shopping-cart');
// muestra aside navbar shopping cart 
const asideShoppingCart = document.querySelector('#shopping-cart');

// aca agregaremos el render de los productos 
const cardsContainer = document.querySelector('.cards-container');

/// contenedor que muestra el aside product detail ///////////////////////////////////////////
 const productDetailContainer = document.querySelector('#product-detail');
//  boton para cerrar el product detail
 const buttonProductDetailContainer = document.querySelector('.product-detail-close');


//////////////////////////// EVENTOS //////////////////////////
// desktop menu 
navbarEmail.addEventListener('click',toggleDesktopMenu);

// mobile menu 
burgerIcon.addEventListener('click',toggleMobileMenu);

// Aside shopping cart 
shoppingCart.addEventListener('click',toggleAsideShoppingCart);

// boton para cerrar el product detail container
buttonProductDetailContainer.addEventListener('click',closeProductDetailContainer);

/////////////////////////// FUNCIONES /////////////////////////

// desktop 
function toggleDesktopMenu(){
    // intercambiamos entre agregar o quitar la clase 
    desktopMenu.classList.toggle('inactive')
    // si estuviera activo el asideShoppingCart, lo oculto 
    asideShoppingCart.classList.add('inactive');
}

// mobile 
// activa transicion del menu mobile 
function toggleMobileMenu(){
    mobileMenu.classList.toggle('menuMobile-activo')

    // corroboro si esta abierto el aside shopping cart 
    if(!asideShoppingCart.classList.contains('inactive')){
        // si esta abierto, lo cierro 
        console.log('esta abierto');
        asideShoppingCart.classList.toggle('inactive');
    }

    productDetailContainer.classList.add('inactive');
}

// aside shopping cart 
function toggleAsideShoppingCart(){
    asideShoppingCart.classList.toggle('inactive');
    // mainContainer.classList.add('darken');


    // si esta abierto el menu mobile, lo cierro 
    // metodo contains corrobora si ese elemento contiene la clase 
    if(mobileMenu.classList.contains('menuMobile-activo')){
        mobileMenu.classList.toggle('menuMobile-activo')
    }

    // intento de ocultar y mostrar menu 
    // asideShoppingCart.classList.toggle('aside-activo');
    
    // si estuviera activo el desktopMenu, lo oculto 
    desktopMenu.classList.add('inactive');

    // si esta abierto el product detail container, lo cierro 
    if(!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive');
    }

    // pruebas con metodos classList ///////////////
    // enumera la cantidad de clases 
    console.log(mobileMenu.classList.length);
    const cantidadMobileMenu = mobileMenu.classList.length;
    for(i=0;i<cantidadMobileMenu;i++){
        // cita las clases del elemento
        console.log(mobileMenu.classList.item(i));   
    }

    
}

 // funcion para renderizar el product detail 
// function openProductDetailAside(){
//     // si estuviera activo el asideShoppingCart, lo oculto 
//     asideShoppingCart.classList.add('inactive');
    
//     productDetailContainer.classList.remove('inactive');


//     // console.log(product.id);
//     // console.log(product.name);
// }

// funcion para cerrar el product detail aside 
function closeProductDetailContainer(){
    productDetailContainer.classList.add('inactive');
}


    // EJEMPLO DE PRODUCTO A RENDERIZAR 
    // 1) <div class="product-card">
    //          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    //       <div class="product-info">
    //       <div>
    //         <p>$120,00</p>
    //         <p>Bike</p>
    //       </div>
    //       <figure>
    //         <img src="./icons/bt_add_to_cart.svg" alt="">
    //       </figure>
    //     </div>
    //  </div> 

 // encapsulamos eel codigo en una function, como buena practica - es practico para reutilizar en otros arrays tambien
    // o eventualmente podemos cargarla o deshabilitar por medio de una interfaz de boton por ejemplo 

    // CREACION DEL ELEMENTO CON EL DOM  y CARGA DE INTERFAZ
    function renderProducts(arr){
        // for utilizado para recorrer el array y renderizar cada producto
        for(product of arr){
            // creamos el div
            const productCard = document.createElement('div');
            // le agregamos la clase al Elemento
            productCard.classList.add('product-card');
    
            // creamos un elemento img
            const productImg = document.createElement('img');
            // modificamos el atributo src, por medio de setAttribute 
            productImg.setAttribute('src',product.img);

            // guardamos localmente el id 
            const productId = product.id;
            
            // creamos un evento al clickear en la imagen para abrir el detalle
            productImg.addEventListener('click', function openProductDetailAside(){
                // console.log(productId);
                asideShoppingCart.classList.add('inactive');
                productDetailContainer.classList.remove('inactive');
                // tomamos el producto que se clickeo, pasamos por argumento su productId
                productIdRender(productId);
            });
            
             // creamos el div
             const productInfo = document.createElement('div');
             // le agregamos la clase al Elemento
             productInfo.classList.add('product-info');
    
             const productInfoDiv = document.createElement('div');
    
            //  parrafo que contendra el precio 
             const productPrice = document.createElement('p');
    
            // insertamos el precio
            productPrice.innerText = '$'+product.price;
    
            // parrafo que contendra el nombre 
            const productName = document.createElement('p');
            // incertamos el nombre 
            productName.innerText = product.name;
    
            // colocamos dentro del div los dos parrafos 
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
    
            const productInfoFigure = document.createElement('figure');
    
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
            // metemos dentro de la etiqueta figure, el productInfoFigure
            productInfoFigure.appendChild(productImgCart);
    
            // agregamos a productInfo los dos bloques productInfo y el figure 
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
    
            // agregamos a productCard los bloques 
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
    
            // agregamos al cards Product el producto
            cardsContainer.appendChild(productCard);
        }
    }

///////////// AGREGAMOS MANUALMENTE PRODUCTOS AL ARRAY ////////////////


// creamos un array vacio 
const productList = [];

// caracteristicas de los elementos del array: imagen, nombre y precio. 
// array de objetos 
productList.push({
    id:0,
    name: 'Byke',
    price: 120,
    description: "Bicicleta Mountain Bike Rodado 29” Cuadro Aluminio.",
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    id:1,
    name: 'PC',
    price: 1400,
    description: 'Procesador AMD 5 5600G, Memoria RAM 8GB DDR4, Disco SSD 1TB.',
    img:"https://m.media-amazon.com/images/I/91LSF1iZUFL._AC_SY355_.jpg"
});

productList.push({
    id:2,
    name: 'Smart TV',
    price: 12000,
    description: ' Smart TV 32PHD6825 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.',
    img:"https://images.fravega.com/f300/ee52763a92e4568d20237c062870c869.jpg.webp"
});

   
// nos da el elemento del array 

// guardamos en objProduct la transformacion del objeto a un array 
const objProduct = Object.entries(productList);


////////////// RENDERIZADO DE PRODUCTOS EN EL MAIN CONTAINER DE LA PAGINA ///////////////// 
renderProducts(productList);


/////////////////// ESTO HAY QUE RECREAR ///////////////////////////
{/*
 <aside id="product-detail" class="inactive">
<div class="product-detail-close">
  <img src="./icons/icon_close.png" alt="close">
</div>
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
<div class="product-info">
  <p>$35,00</p>
  <p>Bike</p>
  <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
  <button class="primary-button add-to-cart-button">
    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    Add to cart
  </button>
</div>
</aside> 
*/}


// renderizamos el ASIDE Product Detail 
function productIdRender(id){
    console.log('el id del producto es',id)
    console.log(productList[id].name);
    console.log(productList[id].price);
    console.log(productList[id].img)
    console.log(productList[id].description);
// CREAMOS EL ELEMENTO aside de product detail 
const productDetailAside = document.createElement('aside');
productDetailAside.classList.add('inactive');
productDetailAside.setAttribute('id','product-detail');

// boton close product detail 
const productDetailClose = document.createElement('div');
productDetailClose.classList.add('product-detail-close');

// icono boton close product detail 
const iconClose = document.createElement('img');
iconClose.setAttribute('src','./icons/icon_close.png');

// renderizamos imagen del producto
const imgProduct = document.createElement('img');
imgProduct.setAttribute('src',productList[id].img);


// creamos el div que contendra PRECIO, NOMBRE, DESCRIPCION Y BOTON
const productInfoDiv = document.createElement('div');
// le agregamos la clase al Elemento
productInfoDiv.classList.add('product-info');

// parrafo que contendra el precio 
const productPrice = document.createElement('p');
productPrice.innerText = '$'+productList[id].price;

// parrafo que contendra el nombre 
const productName = document.createElement('p');
// incertamos el nombre 
productName.innerText = productList[id].name;

// parrafo que contendra el nombre 
const productDescription = document.createElement('p');
// incertamos el nombre 
productDescription.innerText = productList[id].description;

// boton agregar al carrito 
buttonAddToCart = document.createElement('button');
buttonAddToCart.classList.add('primary-button','add-to-cart-button');

const imgBtnAddToCart = document.createElement('img');
imgBtnAddToCart.innerText('Add to cart');



}