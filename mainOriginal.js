/* crear variables para seleccionar elementos del html. */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetailContainer');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

/* escuchar el metodo click que al presionar un icono o texto, aparesca y desaparesca alguno de los menus. */
/* toogle significa intercambiar */
menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

/* se crea la funcion que utilizara la propiedad classList para poner o quitar la clase inactive que cree en el archivo styles.css */
/* Se agrega una condicional que verifica si la etiqueta <aside> esta cerrada o no al presionar el email del usuario. */
function toogleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        mobileMenu.classList.add('inactive');
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

/* Creo una nueva funcion para hacer aparecer y desaparecer el menu hamburguesa al presionar el icono de las 3 rayas. */
/* Se agrega una condicional que verifica si la etiqueta <aside> esta cerrada o no al presionar el icono de 3 rayas. */
function toogleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }
    // Si el aside esta abierto y quiero ver el menu en movil, llamo a la funcion para que lo cierre y asi no se monten entre ellos.
    // La funcion debe ir declarada en esta parte de la otra funcion, sino no logra funcionar bien.
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');

}


/* Creo una nueva funcion para hacer aparecer y desaparecer el menu aside al presionar el icono carrito de compra. */
function toggleCarritoAside() {
    /* Se produce un problema en la vista, si abro el menu de hamburguesa, y tambien el menu del carrito de compra, ambos textos se montan entre ellos, por lo que utilizando JS, se creara una regla que evite esto. */

    /* Creo una variable, la cual se encargara de ver si mobileMenu "contiene" la clase inactive. */
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    /* Utilizando el condicional if() mas ! creo una pregunta con negacion, es decir:  */
    /* Si mobileMenu NO tiene la clase inactive, utilizando add se la agrego. */
    if (!isMobileMenuClosed) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive'); 
    }

    // Si intento abrir otro menu al tener abierto el <aside> de productos no se vera ya que este se visualiza sobre los otros, es por eso que debo hacer que se oculte al presionar el boton de otro menu, para esto:
    // Creo una nueva variable, que se encargara de comparar si productDetailContainer tiene la clase inactive.
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    // En el caso en que no tenga dicha clase, se la agrego con un add.
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
}


/* Creo un arreglo vacio, donde despues le agregare el listado de productos, como si fuera una api. */
const productList = [];

/* utilizando el metodo push() agrego los productos al array. */
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
});
productList.push({
    name: 'Smartphone',
    price: 520,
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Reloj',
    price: 50,
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

/* Creo una nueva funcion que se encargara de renderizar todo el contenido del arreglo dentro del archivo index.html */
/* La funcion recibira como parametro un arreglo. */
function renderProducts(array) {

    /* Existe otra forma de utilizar el ciclo for, en vez de agregar un index e ir sumando de 1 a cada vuelta del ciclo, se puede utilizar "for of" agregando un valor que lea todo un arreglo de objetos. */
    for (producto of array) {
        /* Ahora que tengo el ciclo creado para recorrer el arreglo, debo crear la estructura HTML para imprimir la informacion en la vista del index. */

        // Creo una variable que se convertira en una etiqueta <div> y luego le asigno una clase a al div.
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Para comenzar a cargar la informacion del arreglo en lo que sera el codigo HTML, debo utilizar el formato del index que utilice en el for of, en este caso "producto" luego un punto . y el nombre de la propiedad del objeto que quiero obtener.
        // Por ejemplo = producto.name - producto.price - producto.image
        // Se crea una nueva variable para la etiqueta <img> y como atributo se le pasa un source o src mas el valor que tiene producto.image en el arreglo.
        const productImg = document.createElement('img');
        productImg.setAttribute('src', producto.image);
        // le agrego un evento click al crear la etiqueta <img> y creo una nueva funcion llamada openProductDetailAside para mostrar los productos al hacer clic sobre las imagenes.
        // el evento se debe hacer dentro de esta funcion renderProducts() ya que fuera de esta seccion no existe, por lo que si la llamara desde afuera, el compilador de JS no seria capaz de leerla.
        productImg.addEventListener('click', openProductDetailAside);


        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        // Creo una nueva etiqueta <p> a la que se le pasara el valor que tenga producto.price en el arreglo. Ademas del precio, se le concatena el icono de peso.
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + producto.price;
        // Creo una nueva etiqueta <p> a la que se le pasara el valor que tenga producto.name en el arreglo.
        const productName = document.createElement('p');
        productName.innerText = producto.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        // Se crea la etiqueta <figure> que dentro tendra una etiqueta <img> a la cual se le cargara el icono de carrito de compra que ya tenemos en las carpetas del proyecto, por lo que se debe escribir la ruta para llegar a dicha imagen.
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        // Una vez que la maquetacion se completo, debemos indicarle a javascript en que posicion se deben rendizaron las etiquetas ya creadas, para esto utilizaremos el metodo .appendChild()
        // Al utilizar este metodo comienzo a insertar las etiquetas de hijos a padres, es decir, desde las que estan mas adentro hacia afuera.

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }

}

/* Inicializo la funcion de renderizado y le paso como parametro el arreglo con los productos. */
renderProducts(productList);


/* Funcion para mostrar el menu aside con la vista del producto. Para hacerlo funcionar, solo debo remover la clase inactive, que por defecto estara dentro del html. */
function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    // creo una nueva regla, cuando tenga el aside abierto, que cierre el menu del carrito, ya que si no se solapan entre ellos.
    aside.classList.add('inactive');
}

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/* Funcion que al presionar el boton con la X de cerrar en el menu aside, agregue la clase inactive para ocultar dicho menu. */
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}