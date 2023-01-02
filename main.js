/* Eventos del menu desktop */
const menuEmail = document.querySelector('.navbar-email');
menuEmail.addEventListener('click', activeDesktopMenu);

const desktopMenu = document.querySelector('.desktop-menu');

/* Eventos del menu mobile */
const hamburMenu = document.querySelector('.menu')
hamburMenu.addEventListener('click', activeMobileMenu)

const mobileMenu = document.querySelector('.mobile-menu')


/* Eventos del carrito de compra */
const menuCarritoDeCompras = document.querySelector('.navbar-shopping-cart')
menuCarritoDeCompras.addEventListener('click' , showMyOrder)

const porductDetail = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container')




function activeDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    porductDetail.classList.add('inactive')
}

function activeMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    porductDetail.classList.add('inactive')
}

function showMyOrder(){
    porductDetail.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}


/* Lista de productos dinamica */
const listaDeProductos = [];
listaDeProductos.push({
    nombre: 'Bicicleta',
    precio: 120,
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/881952255_1?wid=800&hei=800&qlt=70'
});
listaDeProductos.push({
    nombre: 'Monitor',
    precio: 200,
    img: 'https://http2.mlstatic.com/D_NQ_NP_654285-MLV52559418174_112022-W.jpg'
});
listaDeProductos.push({
    nombre: 'Pc Gamer',
    precio: 1220,
    img: 'https://m.media-amazon.com/images/I/51-FhVIYrVL.jpg'
});

/* Este for realiza un recorrido por el array de la lista de productos y a su ves, crea los elementos en el HTML para cada producto que se agregue a la tienda. */
for (productos of listaDeProductos){

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', productos.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPierce = document.createElement('p');
    productPierce.innerHTML = '$' + productos.precio;

    const productName = document.createElement('p');
    productName.innerHTML = productos.nombre;

    productInfoDiv.append(productName, productPierce);

    const productFigure = document.createElement('figure');
    const productFigureimg = document.createElement('img');
    productFigureimg.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(productFigureimg);

    productInfo.append(productInfoDiv, productFigure);

    productCard.append(img, productInfo);

    cardsContainer.append(productCard)
};