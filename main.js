const divMenuEmail = document.querySelector('.navbar-email');
const emailMenu = document.querySelector('.desktop-menu');
const IconburgerMenu = document.querySelector('.menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.product-detail');
const cardsContainers =document.querySelector('.cards-container');

divMenuEmail.addEventListener('click', menuDesplegable);
IconburgerMenu.addEventListener('click', menuMobileDesplegable);
iconCarrito.addEventListener('click', carritoDesplegable);

function menuDesplegable(){
    if(!menuCarrito.classList.contains('inactive')){
        menuCarrito.classList.add('inactive');
    }
    emailMenu.classList.toggle('inactive');
}
function menuMobileDesplegable(){

    if(!menuCarrito.classList.contains('inactive')){
        menuCarrito.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function carritoDesplegable(){
    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }
    else if(!emailMenu.classList.contains('inactive')){
        emailMenu.classList.add('inactive');
    }
    menuCarrito.classList.toggle('inactive');
}

const listaProductos = [];
listaProductos.push({
    name: 'Kawasaki klx 150L',
    precio: 25000,
    imagen: 'https://i.pinimg.com/564x/a1/2e/7b/a12e7bff4e786ea3894d712dc859b99a.jpg'
}, {
    name: 'Honda crf 150L',
    precio: 27000,
    imagen: 'https://i.pinimg.com/564x/f7/74/b9/f774b9e4e44a290d7c066056f545c541.jpg'
}, {
    name: 'Hero xpulse 200',
    precio: 20000,
    imagen: 'https://i.pinimg.com/564x/14/d5/87/14d587d796b955a476bda01ea2d8c363.jpg'
}, {
    name: 'Honda crf 150L',
    precio: 27000,
    imagen: 'https://i.pinimg.com/564x/f7/74/b9/f774b9e4e44a290d7c066056f545c541.jpg'
}, {
    name: 'Hero xpulse 200',
    precio: 20000,
    imagen: 'https://i.pinimg.com/564x/14/d5/87/14d587d796b955a476bda01ea2d8c363.jpg'
});

function renderProducts(array){
    for(producto of array){
        const divProductCard = document.createElement('div');
        divProductCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', producto.imagen);

        const divProductInfo = document.createElement('div');
        divProductInfo.classList.add('product-info');


        const infoProductos = document.createElement('div');

        const precioProducto = document.createElement('p');
        precioProducto.innerText= 'Q '+ producto.precio;
        const nombreProducto = document.createElement('p');
        nombreProducto.innerText = producto.name;

        const figure = document.createElement('figure');
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src',"./icons/bt_add_to_cart.svg");

        //figure - img
        figure.appendChild(imgFigure);

        //div - p, p
        infoProductos.appendChild(precioProducto);
        infoProductos.appendChild(nombreProducto);

        //div - divinfoPduct
        divProductInfo.appendChild(infoProductos);
        divProductInfo.appendChild(figure);

        //divPrincipal - img
        divProductCard.appendChild(img);
        divProductCard.appendChild(divProductInfo)

        cardsContainers.appendChild(divProductCard);
    }
}

renderProducts(listaProductos);


