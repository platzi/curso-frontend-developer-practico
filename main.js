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

const porductDetail = document.querySelector('#carroDeCompras')

/* Eventos de detalles del procuto */
const cardsContainer = document.querySelector('.cards-container')
cardsContainer.addEventListener('click', toggleProductContainer)

const productDetailsClosed = document.querySelector('.product-detail-close')
productDetailsClosed.addEventListener('click', closedDetails)

const detalles = document.querySelector('#product-detail')




function activeDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    porductDetail.classList.add('inactive')
    detalles.classList.add('inactive')

}

function activeMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    porductDetail.classList.add('inactive')
    detalles.classList.add('inactive')

}

function showMyOrder(){
    porductDetail.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    detalles.classList.add('inactive')
}

function closedDetails(){
    detalles.classList.toggle('inactive')
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

function renderProducts(arr){
    /* Este for realiza un recorrido por el array de la lista de productos y a su ves, crea los elementos en el HTML para cada producto que se agregue a la tienda. */
    
    for (productos of arr){

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', productos.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('productInfo');

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

    cardsContainer.append(productCard);
    };  
}

renderProducts(listaDeProductos);

function toggleProductContainer(){
    detalles.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    porductDetail.classList.add('inactive')
}

/* const productDetails = []

productDetails.push({
    nombre: 'Bicicleta',
    precio: 120,
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/881952255_1?wid=800&hei=800&qlt=70'
});
productDetails.push({
    nombre: 'Monitor',
    precio: 200,
    img: 'https://http2.mlstatic.com/D_NQ_NP_654285-MLV52559418174_112022-W.jpg'
});
productDetails.push({
    nombre: 'Pc Gamer',
    precio: 1220,
    img: 'https://m.media-amazon.com/images/I/51-FhVIYrVL.jpg'
});

function showDetails(arr){
    for(productos of arr){
        const productDetailsClosed = document.createElement('div');
        productDetailsClosed.classList.add('product-detail-close')

        const imgClosed = document.createElement('img');
        imgClosed.setAttribute('src', './icons/icon_close.png');

        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', productos.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productPierce = document.createElement('p');
        productPierce.innerHTML = productos.precio;

        const productName = document.createElement('p');
        productName.innerHTML = productos.nombre;

        const productDescription = document.createElement('p');
        productDescription.innerHTML = 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace';

        const addToCart = document.createElement('button');
        addToCart.classList.add('primary-button', 'add-to-cart-button');

        const imgButton = document.createElement('img');
        imgButton.setAttribute('src', './icons/bt_add_to_cart.svg');

        detalles.append(productDetailsClosed, imgProduct, productInfo)
        productDetailsClosed.append(imgClosed)
        productInfo.append(productPierce, productName, productDescription, addToCart);
        addToCart.append(imgButton);


    }
};

showDetails(productDetails); */