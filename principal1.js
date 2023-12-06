// Botones de la Interfaz HTML

const botonCorreoDesktop = document.querySelector('.navbar-email');
const botonCorreoMoobile = document.querySelector('.email');
const botonHamburgMobile = document.querySelector('.menu');
const botonCarrito = document.querySelector('.navbar-shopping-cart');

//Menus de la interfaz HTML

const opcionesCorreoPc = document.querySelector('.desktop-menu');
const opcionesCorreoMobile = document.querySelector('.mobile-menu');
const opcionesCarrito = document.querySelector('.product-detail');

//Desplegar menu con opciones del correo - Desktop/Mobile

function menuDestoktop_Mobile() {
    let resolucion = window.innerWidth;
    if(resolucion < 640) {
        opcionesCorreoMobile.classList.toggle('inactivo'); 
        opcionesCarrito.classList.add('inactivo');
    }
    else {
        opcionesCorreoPc.classList.toggle('inactivo');
        opcionesCarrito.classList.add('inactivo');
    }
}
botonCorreoDesktop.addEventListener('click', menuDestoktop_Mobile);
botonHamburgMobile.addEventListener('click', menuDestoktop_Mobile);

// Desplegar menu de compras activas

function menuCarroCompras () {
    opcionesCarrito.classList.toggle('inactivo');
    opcionesCorreoMobile.classList.add('inactivo');
    opcionesCorreoPc.classList.add('inactivo');
}
botonCarrito.addEventListener('click', menuCarroCompras);

// Productos de la pag. principal

const productCardHtml = document.querySelector('.cards-container')
const listaDeProductos = [];

listaDeProductos.push({
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 120.0,
    name: 'Bike'
})
listaDeProductos.push({
    img: 'https://skate-home.com/6629-thickbox_default/skateboard-arte-de-pared-california.jpg' ,
    price: 80.5,
    name: 'Skate'
})
listaDeProductos.push({
    img: 'https://cdnx.jumpseller.com/klikmuebles/image/32667328/thumb/610/610?1677673449' ,
    price: 200.0,
    name: 'Electric Scooper'
})

function newProduct () {
    for (product of listaDeProductos){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const imgHtml = document.createElement('img');
        imgHtml.setAttribute('src', product.img);

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
newProduct();
