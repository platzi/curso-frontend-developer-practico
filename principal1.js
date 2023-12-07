// Botones de la Interfaz HTML

const botonCorreoDesktop = document.querySelector('.navbar-email');
const botonCorreoMoobile = document.querySelector('.email');
const botonHamburgMobile = document.querySelector('.menu');
const botonCarrito = document.querySelector('.navbar-shopping-cart');

//Menus de la interfaz HTML

const opcionesCorreoPc = document.querySelector('.desktop-menu');
const opcionesCorreoMobile = document.querySelector('.mobile-menu');
const opcionesCarrito = document.querySelector('.product-detail-menu');

//Desplegar menu con opciones del correo - Desktop/Mobile

function menuDestoktop_Mobile() {
    let resolucion = window.innerWidth;
    if(resolucion < 640) {
        opcionesCorreoMobile.classList.toggle('inactivo'); 
        opcionesCarrito.classList.add('inactivo');
        detailsMenu.classList.add('inactivo');
    }
    else {
        opcionesCorreoPc.classList.toggle('inactivo');
        opcionesCarrito.classList.add('inactivo');
        detailsMenu.classList.add('inactivo');
    }
}
botonCorreoDesktop.addEventListener('click', menuDestoktop_Mobile);
botonHamburgMobile.addEventListener('click', menuDestoktop_Mobile);

// Desplegar menu de compras activas

function menuCarroCompras () {
    opcionesCarrito.classList.toggle('inactivo');
    opcionesCorreoMobile.classList.add('inactivo');
    opcionesCorreoPc.classList.add('inactivo');
    detailsMenu.classList.add('inactivo');
}
botonCarrito.addEventListener('click', menuCarroCompras);


// Productos de la pag. principal


function newProduct () {
    for (product of listaDeProductos){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const imgHtml = document.createElement('img');
        imgHtml.setAttribute('src', product.img);
        imgHtml.classList.add('cartImage');
        

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const div1 = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.innerText ='$' + product.price;
        p2.innerText = product.name;
        div1.append(p1, p2);
        
        const figure1 = document.createElement('figure');
        const imagenProducto = document.createElement('img');
        imagenProducto.setAttribute('src', './icons/bt_add_to_cart.svg');
        figure1.append(imagenProducto);
        productInfo.append(div1, figure1);

        productCard.append(imgHtml, productInfo);
        productCardHtml.append(productCard);
        
    }
}
const productCardHtml = document.querySelector('.cards-container');

const listaDeProductos = [];

listaDeProductos.push({
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 120.0,
    name: 'Bike',
    description: "Cicla en buen estado, con tematica de los 2000', con un diseño estrategico para un uso comodo"
})
listaDeProductos.push({
    img: 'https://skate-home.com/6629-thickbox_default/skateboard-arte-de-pared-california.jpg' ,
    price: 80.5,
    name: 'Skate',
    description: "Skate practicamente nuevo, no presenta daños, y la pintura de la parte posterior esta bien compuesta"
})
listaDeProductos.push({
    img: 'https://cdnx.jumpseller.com/klikmuebles/image/32667328/thumb/610/610?1677673449' ,
    price: 200.0,
    name: 'Electric Scooper',
    description: "Scooper original, viene con cargador, y puede llegar hasta los 15 km/h"
})
newProduct();


// Detalles de Productos de la pag. principal
// .1 Botones para abrir y cerrar el menu de detalles.

const productsBttn = document.querySelectorAll('.cartImage');
const detailsMenu = document.querySelector('.product-detail-principal');

    productsBttn.forEach(function(element) {
    element.addEventListener('click', function(event){
        productDetailMenu();
        const indice = Array.from(productsBttn).indexOf(event.currentTarget);
        productDetailFunction(indice);        
    });
    
});

function productDetailMenu() {
    detailsMenu.classList.toggle('inactivo');
    opcionesCorreoMobile.classList.add('inactivo');
    opcionesCorreoPc.classList.add('inactivo');
    opcionesCarrito.classList.add('inactivo');
}

const bttnCloseMenu = document.querySelector('.product-detail-principal-close');
bttnCloseMenu.addEventListener('click', productDetailMenu);

// .2 Detalles especificos de cada producto.

function productDetailFunction(indice) {  
    const imagenPrincipalMenu = document.querySelector('#image');
    imagenPrincipalMenu.setAttribute('src', listaDeProductos[indice].img);
    imagenPrincipalMenu.setAttribute('alt', listaDeProductos[indice].name);

    const divProductInfo = document.querySelector('.product-info-principal');
    const p1 = document.querySelector('#p1');
    p1.innerText = ('$' + listaDeProductos[indice].price);
    const p2 = document.querySelector('#p2');
    p2.innerText = (listaDeProductos[indice].name);
    const p3 = document.querySelector('#p3');
    p3.innerText = (listaDeProductos[indice].description);
}  

const productDetailHtml= document.querySelector('.product-detail-principal');