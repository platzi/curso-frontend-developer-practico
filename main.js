
// lo que estamos haciendo es creadno una variable que hara almaccenar la infomacion para darle 
// una accion o enm este caso evento
const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');

// creamos dos variables que seran los selectores del boto0n de mobile y asimismo el menu desplegable del nav de mobile

const mobileButtonMenu = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');


// creamos una constante para seleccionar el selector de nuestro carrito en nuestra barra de menu en el html
const shopcarMenu = document.querySelector ('.navbar-shopping-cart');
const aside = document.querySelector ('.product-detail'); //asi mismo una para seleccionar nuestro aside



// agregamos el evento creano addevent lisenet y aqui esta la sintaxis

// variableName.addEventLisener('Nombre dela accion', FuncionName);
menuEmail.addEventListener('click', toggleDesktopMenu);
//este evento es el del menu mobile
mobileButtonMenu.addEventListener('click', toggleMobileMenu);


//de igual forma agregamos un escuchador para nuestro niestros objetops de carritos y poder mostrar el aside al ser cliqueado 
shopcarMenu.addEventListener('click', toggleAsideMenu);
 
//creamos una cosntante que seleccionara nuestro contenedor principal de las cards
const cardsContainers = document.querySelector ('.cards-container');


// aqui creamos la funcionque se encargara de darle la accion al lo que queremos realizar

function toggleDesktopMenu () {
    //si fuenciono pero no se retrae el menu
    //document.getElementsByClassName('inactive')[0].style.display = 'block';
    
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive');

    }

    desktopMenu.classList.toggle('inactive');
    
}

// esta es la funcion de atraer y retraer el menu mobile

function toggleMobileMenu () {

    const isAsideClose = aside.classList.contains('inactive');
//agregamos esta funcion para que valiude que cuando el menu de aside sea activo que le agregue el inactivo y si no se cumple que no
// que se ejecute el toggle
    if (!isAsideClose) {
        aside.classList.add('inactive');

    }

    mobileMenu.classList.toggle('inactive');
    
}


// // esta es la funcion de atraer y retraer el menu del carrito para vizualizarse


// function toggleAsideMenu () {

//     aside.classList.toggle('inactive');
// }


//al vizualizar el error de que el menu de mobile esta detras del menu del carrito lo resolveremos
// para que al momento de que se abra el menu de mobil se cierre el carritto
function toggleAsideMenu () {
    //crearemos una condicional que evaluara que el carrito este abierto y en tal caso que si lo sea
    // se cerrara al momento de que se abra el menu de mobile

    // crearemos 2 variables para leer cuando este o no este activa la condicion de inactive en la etiqueta del mobile menu
    // en estas variables lo que se lee es: mientra es su "claslist" contenga "contains" inactive... 
    const isMobileClose = mobileMenu.classList.contains('inactive');
    const isDesktopClose = desktopMenu.classList.contains('inactive');
    // // asimismo validaremos que en la variable de aside cuando contenga y no el inactive
    // const isAsideClose = aside.classList.contains ('inactive');


    //nuestra condicion sera si isMobileClose es diferente a inactiva, add "agregaselo"
    if (!isMobileClose) {
        mobileMenu.classList.add('inactive');
        console.log('hola');
    } if (!isDesktopClose) {
        desktopMenu.classList.add('inactive');
    }

    // de lo contrario cambialo de inactivo a activo
    aside.classList.toggle('inactive');
}

// agregaremos informacion al main donde se detallaran los productos 
//el primer paso es crear una array y donde se le agregara siempre que queramos informacion con los parametrso que necesite nuestra card del producto


const productList = [];

// con este comando agregaremos el producto en el array
// estos seran los parametros que haran que llenadolos se crearan nuestra base de productos que se incluiran en el array
// productList.push({
//     name: ,
//     price: ,
//     image: ,
// });



productList.push({
    name: 'Camera',
    price: 130,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Phones',
    price: 160,
    image: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Watch',
    price: 100,
    image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Headphones',
    price: 80,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Chainsaw',
    price: 60,
    image: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Set-up Dev',
    price: 560,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Laptop',
    price: 420,
    image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Dual Monitor',
    price: 350,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Processor Card',
    price: 260,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Computer Keyboard',
    price: 60,
    image: 'https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Tablet',
    price: 299,
    image: 'https://images.pexels.com/photos/2265482/pexels-photo-2265482.jpeg?auto=compress&cs=tinysrgb&w=600',
})

productList.push({
    name: 'Library',
    price: 340,
    image: 'https://images.pexels.com/photos/13883386/pexels-photo-13883386.jpeg?auto=compress&cs=tinysrgb&w=600',
})


// hay formas de recorrer arrays como vimos en la clase basica con variables y sumandole 1 a la i para que vaya avanzando por el array el bucle for
//pero, una forma facil de que se puede adquieirir un valor especifico del array es con la propiedad 'of', aplicada de la siguiente manera

// for (valorVariableName of arrayName) {
    //do something 
// }
// creamos nuestra funcion para recorrer el array con for 
for (product of productList) {

    // crearemos el contenedor del producto del html desde el principiocon nuestro JS

    //con esta constante creamos el contenedor DIV
    const productCart = document.createElement ('div');
    //que luego le agregamos la clase tal cual la tiene nuestro elemento de HTML
    productCart.classList.add ('product-card');

    //igual aca creamos el contenedor que es una etiqueta de img
    const productImg = document.createElement ('img');
    //le cambiaremos el atributo al contenedor img que hara que de como resultado la imagen del objeto que esta en el array de la sigueinte forma
    //normalmente usamos src para seguido de una direccion de la imagen p0ero en este caso haremos que sea dinamica la funcion y llamara directamente la imagen del producto que queramos
    productImg.setAttribute ('src', product.image);

    // agregamos el contenedor de la info de la misma forma que el product card
    const productInfo = document.createElement ('div');
    productInfo.classList.add ('product-info');

    //crrfeamos el contenedor
    const productInfoDiv = document.createElement ('div');
    //loque haremos aqui es agregar las etiquetas de p para los parrafos que se mostraran en las cards de price u de nombre del producto
    const productPrice = document.createElement ('p');
    //que luego a cada una las meteremos adentro del contenedor div que antes creamos tal cual esta en el html
    //concatenamos con un + y hacemos llamado del array con el mismo proceesos pero en este caso el precio
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement ('p');
    productName.innerText = product.name;

    //agregamos el precio y el nombre del producto en nuestro contenedor
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);



    
    const productImgFigure = document.createElement ('figure');
    const imgProductCart = document.createElement ('img');
    //al no ser una imagen dinamica sino que es una imagen ya de la pagina que no cambiara. usamos el url directamente en la adicion de la imagen
    imgProductCart.setAttribute ('src', "./icons/bt_add_to_cart.svg");

    //agregamos adentro del fure  la imagen del carrito 
    productImgFigure.appendChild(imgProductCart);


    //Introducimos figure y el cpntenedor de productInfoDiv adentro del productInfo(padre)
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productImgFigure);
    
    //introducimos img y el div de product info en el div de product-card
    productCart.appendChild(productImg);
    productCart.appendChild(productInfo);
    

    //agregamos esta informacion para que sea agregue todo el contenedor de productCard en el contenedor padre cardsContainers
    cardsContainers.appendChild(productCart);

}

/**
crearemos poer parte este elemento con el cess
<div class="product-card">  --->  const productCart = document.createElement ('div') / productCart.classList.add ('product-card')
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""> --->  const productImg = document.createElement ('img'); / productImg.setAttribute ('src', product.image);
    <div class="product-info"> ---> const productInfo = document.createElement ('div'); / productInfo.classList.add ('product-info');
        <div> --> const productInfoDiv = document.createElement ('div');
            <p>$120,00</p> --> const productInfoDiv = document.createElement ('div'); / productPrice.innerText = '$' + product.price;
            <p>Bike</p> ---> const productName = document.createElement ('p'); / productName.innerText = '$' + product.name;
        </div>
        <figure> -+--> const productImgFigure = document.createElement ('figure');
            <img src="./icons/bt_add_to_cart.svg" alt=""> ---> const imgProductCart = document.createElement ('img'); / imgProductCart.setAttribute ('src', "./icons/bt_add_to_cart.svg");
        </figure>
    </div>
</div> -->

 */