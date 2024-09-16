//Asignamos la selección de elementos HTML a una Constante.
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const iconMenu = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobilMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const imagenDetailID = document.querySelector('#imagenDetail');
const priceDetail = document.querySelector('#priceDetail');
const nameDetail = document.querySelector('#nameDetail');
const descripcionDetail = document.querySelector('#descripcionDetail');
const myOrderContent = document.querySelector('.my-order-content');
const cartElements = document.querySelector('#cartElements');

const cardsContainer = document.querySelector('.cards-container');

//Escuchamos el evento click para llamar una función
menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobilMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    //Si existe devolvera un True
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    //Verificamos que el aside este abierto
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    //El toogle cambia el valor, si existe inactive la saca, si no lo agrega
    desktopMenu.classList.toggle('inactive');

}

function toggleMobilMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    //Llamamos a la funsión closeProductDetailAside para cerrarla por si esta habierta
    closeProductDetailAside();

    //Cambia el valor
    mobilMenu.classList.toggle('inactive');

}

function toggleCarritoAside() {
    const isMobilMenuClosed = mobilMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobilMenuClosed){
        //Si esta abierto lo cerramos
        mobilMenu.classList.add('inactive');
    }

    //Cerramos el productDetail si otros menus se activan
    const productDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!productDetailClosed){
        productDetailContainer.classList.add('inactive');
    }


    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');

    //llamamos a la función de renderizado del carrito
    renderCarrito(carritoCompras);

}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside() {
    //Siempre que querramos abrir los detalles cerraremos el carrito
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');


}


// - Definición de arrays:

// Generamos un arrays para guardar objetos con los datos de latienda
const productList = [];

// Generamos el array de carrito.
const carritoCompras = [];

//Array de verificación de lo publicado en el carrito
const verificationCcArray = [];


// #site todo
//Agregar al carrito
function agregarAlCarrito(identificador) {

    //const verifyProduct  = productList[identificador].name;
    // const articulosFiltradaso = carritoCompras.filter(function(articulo){
    //     return articulo.name == verifyProduct;
    // });

    const articulosFiltradaso = carritoCompras.filter(function(articulo){
        return articulo.id == identificador;
    });
   
   
    if ( articulosFiltradaso.length != 0 )
    {
        
        // const elementIndexCarrito = carritoCompras.findIndex((obj => obj.name == verifyProduct));
        const elementIndexCarrito = carritoCompras.findIndex((obj => obj.id == identificador));
        let cantidadAgregadas = carritoCompras[elementIndexCarrito].cantidad;
        cantidadAgregadas++;
        carritoCompras[elementIndexCarrito].cantidad = cantidadAgregadas;

    } else {
    //Agregamos al carrito de compras
    const elementIndexProductList = productList.findIndex((obj=> obj.id == identificador));
    //carritoCompras.push(productList[identificador]);
    carritoCompras.push(productList[elementIndexProductList]);

    }
    
    let elementoAgregado = 0;
    for ( elemento of carritoCompras){
        let elementoRecorrido = elemento.cantidad;
        elementoAgregado = elementoAgregado + elementoRecorrido;
    }
    cartElements.innerText = elementoAgregado;
    
    
};

//Eliminar del carrito
function eliminarDelCarrito(identificador){
    const indexDelObjeto = carritoCompras.findIndex((obj => obj.id == identificador));
    let cantidadProducto = carritoCompras[indexDelObjeto].cantidad;

    if ( cantidadProducto > 1 ){
        //Se se resta del render "my order" y del icono cartElements
                //Actualizamos el valor del elemento en el array -1
        let cantidadActual =  carritoCompras[indexDelObjeto].cantidad;
        carritoCompras[indexDelObjeto].cantidad = cantidadActual - 1;
        
        //Identificar elemento cantidad dentro del Div que contine las ordenes.
        //Actualizamos el render con la cantidad guardad actualizada.
        document.getElementById("Elemento"+identificador).innerText = carritoCompras[indexDelObjeto].cantidad;

        let elementoContavilizado = 1;
        for ( elemento of carritoCompras){
            let elementoRecorridoCantidad = elemento.cantidad;
            elementoContavilizado = elementoContavilizado + elementoRecorridoCantidad;
        }
        let elementoRestado = elementoContavilizado - 1;
        cartElements.innerText = elementoRestado;

    } else {

        //Eliminamos producto del carrito
        carritoCompras.splice(indexDelObjeto, 1);

        //Removemos los Elementos HTML del DOM
        document.getElementById("shoppingCart"+identificador).remove();


        //Se se resta del render "my order" y del icono cartElements
        let elementoContavilizado = 1;
        for ( elemento of carritoCompras){
            let elementoRecorridoCantidad = elemento.cantidad;
            
            elementoContavilizado = elementoContavilizado + elementoRecorridoCantidad;
        }
        let elementoRestado = elementoContavilizado - 1;
        cartElements.innerText = elementoRestado;

    }

};

//Agregamos elementos al arrays con los datos de los productos.
productList.push({
    name: 'bike',
    category: 'bikes',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion: 'Bicicleta super impresionante con velocidades incomparables, vintage modelo Peugeot',
    cantidad: 1,
    id: 10,
});

productList.push({
    name: 'Moto BMW - Coffe Reacer',
    category: 'motorcycle',
    price: 5000,
    imagen: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion: 'Una gran moto de la marca BMW custom, modelado a una clasica apariencia Coffee Reacer',
    cantidad: 1,
    id: 11,
});

productList.push({
    name: 'GameBoy',
    category: 'toys',
    price: 800,
    imagen: 'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion: 'Una clasica consola GameBoy original, con la que podras disfrutar juegos de epoca',
    cantidad: 1,
    id: 12,
});

productList.push({
    name: 'TOYOTA MR2',
    category: 'carts',
    price: 7000,
    imagen: 'https://images.pexels.com/photos/17797237/pexels-photo-17797237/free-photo-of-coche-vehiculo-vintage-retro.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion: 'Arto auto que nos hace recordar a peliculas de los 80s',
    cantidad: 1,
    id: 13,
})

//
productList.push({
    name: 'Cassete Video',
    category: 'electronics',
    price: 80,
    imagen: 'https://images.pexels.com/photos/17758160/pexels-photo-17758160/free-photo-of-sucio-vintage-retro-kodak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Sinta de video VHS',
    cantidad: 1,
    id: 14,
})

//6
productList.push({
    name: 'Telefono',
    category: 'home',
    price: 120,
    imagen: 'https://images.pexels.com/photos/17786712/pexels-photo-17786712/free-photo-of-madera-vintage-de-madera-antiguo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Un clasico teléfono funcional, con roldete de marcas',
    cantidad: 1,
    id: 14,

})

//7
productList.push({
    name: 'Wold Waggen Band',
    category: 'carts',
    price: 7000,
    imagen: 'https://images.pexels.com/photos/17606859/pexels-photo-17606859/free-photo-of-vehiculo-viaje-viajar-retro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Mini Band clasica de los años 60',
    cantidad: 1,
    id: 15,

})

//8
productList.push({
    name: 'Motor - V5 ',
    category: 'carts',
    price: 7000,
    imagen: 'https://images.pexels.com/photos/17575475/pexels-photo-17575475/free-photo-of-coche-vehiculo-tuberias-retro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Un maquinon, no te deja tirado con tremendo motor. Como nafta como loco',
    cantidad: 1,
    id: 16,

})

//9
productList.push({
    name: 'Write Machine',
    category: 'home',
    price: 600,
    imagen: 'https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Maquina de escribir de Isaac Assimov, en ella escribio sus mejores novelas de ciencia ficción',
    cantidad: 1,
    id: 17,

})


//Renderizamos el carrito de compras
function renderCarrito(arr){


    //Contador: Necesario para eliminar objeto del carrito
    //let contadorCarrito = 0;

    //Obtenemos las diferencias entre el array pasado al argumento y el de verificationCcArray
    let difference = arr.filter(x => !verificationCcArray.includes(x));
   
    for (productCartArr of difference) {

            //Vamos ingresando los objetos al array de verificacion
            verificationCcArray.push(productCartArr);
           
            //Agregamos un ID a cada objeto creado para poder ser eliminado

            const shoppingCart = document.createElement('div');
            shoppingCart.classList.add('shopping-cart');
            //shoppingCart.setAttribute('id', 'shoppingCart'+contadorCarrito );
            shoppingCart.setAttribute('id', 'shoppingCart'+productCartArr.id );
                
            const figureImgCart = document.createElement('figure');
            const imgCart = document.createElement('img');
            imgCart.setAttribute('src', productCartArr.imagen);

            const cantidadMostrar = document.createElement('p');
            cantidadMostrar.innerText = productCartArr.cantidad;
            // cantidadMostrar.setAttribute('id', 'Elemento'+contadorCarrito);
            cantidadMostrar.setAttribute('id', 'Elemento'+productCartArr.id);

            const parrafoNombre = document.createElement('p');
            parrafoNombre.innerText =  productCartArr.name;
            
            const parrafoPrice = document.createElement('p');
            parrafoNombre.innerText = "$" + productCartArr.price;

            const imgEliminarProducto = document.createElement('img');
            imgEliminarProducto.setAttribute('src', './icons/icon_close.png');
            imgEliminarProducto.setAttribute('alt', 'close');
            // imgEliminarProducto.setAttribute('onclick', 'eliminarDelCarrito('+contadorCarrito+')' );
            imgEliminarProducto.setAttribute('onclick', 'eliminarDelCarrito('+productCartArr.id+')' );

            //Agregar manito para hacer clik
            imgEliminarProducto.setAttribute('class', 'puntero');
            //contadorCarrito++;

            //Maquetado
            myOrderContent.appendChild(shoppingCart);
            
            shoppingCart.appendChild(figureImgCart);

            figureImgCart.appendChild(imgCart);
            
                
            shoppingCart.appendChild(parrafoNombre);
            shoppingCart.appendChild(cantidadMostrar);
            shoppingCart.appendChild(parrafoPrice);
            shoppingCart.appendChild(imgEliminarProducto);
            //  console.log(imgEliminarProducto);

    }

    


}

//Resivimos un array como parametro para renderizar
function renderProducts(arr){

    
    //Recorremos el array para representar en HTML nuestros productos
    //nos da directamente el elemento del array
    for (product of arr ){
        //creamos elementos HTML
        const productCard = document.createElement('div');
        //Le agregamos una clase
        productCard.classList.add('product-card');
    
        //Agregamos una imagen 
        const img = document.createElement('img');

        //Seteamos un atributo y le damos el valor del objeto product.img
        img.setAttribute('src', product.imagen);

        //Agregamos el addEventListener aqui por que en HTML no existen estos elementos, aca si por que lo creamos por JS
        img.addEventListener('click', function(event) {
            
            //Llamamos a la función para remover la clase "inactive" y visualizar el Aside
            openProductDetailAside();
            
            //Obtenemos la URL del atributo SRC de la imagen
            const srcImagenClicked =  event.target.currentSrc;
            imagenDetailID.setAttribute('src', srcImagenClicked);
            
            //Buscamos en nuestro array, que objeto tiene dicha Cadena de texto
            //y Crea un nuevo array con un objeto con esos datos
            const articuloFiltrado = arr.filter(function(arrObjeto){
                return arrObjeto.imagen == srcImagenClicked;
            });
            //Obtenemos El nombre 
            const articuloFiltradoNombre = articuloFiltrado.map(function(nameFilter){
                return nameFilter.name
            });
            nameDetail.innerText = articuloFiltradoNombre;

            //Obtenemos el Precio de ese objeto
            const articuloFiltradoPrecio = articuloFiltrado.map(function(nameFilter){
                return nameFilter.price
            });
            priceDetail.innerText = '$' + articuloFiltradoPrecio;

            //Ontenemos la descripción 
            const descripcionFiltrado = articuloFiltrado.map(function(nameFilter){
                return nameFilter.descripcion
            });
            descripcionDetail.innerHTML = descripcionFiltrado;

            //identificamos el button agregar al carrito
            const agregarAlCarritoAside = document.querySelector("#buttonAdd2Carrito");
            const idProducto = product.id;
            agregarAlCarritoAside.setAttribute('onclick', 'agregarAlCarrito('+ idProducto +')');
            //Falta: Agragr un efecto visual al button cuando se realiza el click.

        });

    
        
            //creamos elementos HTML
            const productInfo = document.createElement('div');
            //Le agregamos una clase
            productInfo.classList.add('product-info');
    
            
                //Div de contenido y nombre
                const productInfoDiv = document.createElement('div');
            
                    //Agregamos dos parrafos
                    const productPrice = document.createElement('p');
                    productPrice.innerText = '$' + product.price;
    
                    const productName = document.createElement('p');
                    productName.innerText = product.name;
    
                //Figure
                const productInfoFigure = document.createElement('figure');
                    const productInfoFigureImg = document.createElement('img');
                    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
                
                    //Agregamos un evento onclick en cada elemento generado para llamar a un función
                    productInfoFigureImg.setAttribute('onclick', 'agregarAlCarrito('+ product.id +')');
                    productInfoFigureImg.setAttribute('class', 'puntero');
                        
            //Agregamos El orden de los elementos con appendChild, indicando cual sera el hijo del elemento seleccionado
            //Agregamos a product-card debajo de cards-container
            cardsContainer.appendChild(productCard);
    
            productCard.appendChild(img);
            productCard.appendChild(productInfo);
            
    
                //Generamos el Orden de los DIV
                productInfo.appendChild(productInfoDiv);
    
                    //Generamos el Orden de los DIV
                    productInfoDiv.appendChild(productPrice);
                    productInfoDiv.appendChild(productName);
    
                productInfo.appendChild(productInfoFigure);
                    //Generamos el Orden de los DIV
                    productInfoFigure.appendChild(productInfoFigureImg);
                    console.log(productInfoFigureImg);
    
    }

}


//Llamamos la función para renderizar
renderProducts(productList);

//Función Filtrar
function megaFiltro(catFilter){
    //Elimina el render actual
    deleteProduct();

    if( catFilter == "all"){
        renderProducts(productList);
    } else {

    //Creamos un nuevo array filtrado
    const articuloCategoria = productList.filter(function(arrObjeto){
        return arrObjeto.category == catFilter;
    });

    renderProducts(articuloCategoria);
    }


}

//Eliminamos los elementos producCards
function deleteProduct() {
    let allElements = Array.from(document.querySelectorAll(".product-card"));

    allElements.forEach((item) => {
        item.remove();
    });

}