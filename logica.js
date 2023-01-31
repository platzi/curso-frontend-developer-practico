// declarar las variables

const iconAccount = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuResponsi = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarShop = document.querySelector('.navbar-shopping-cart');
const detalleCarrito = document.querySelector('#shoping-car');
const exterior = document.querySelector('.modal');
// esta variable es para crear la modificación del HTML
const cardsContainer = document.querySelector('.cards-container');

// crear los eventos 

iconAccount.addEventListener('click', toggledesktopMenu );
iconMenuResponsi.addEventListener('click', toggleMobilMenu );
iconCarShop.addEventListener('click', shopingCar);


/*el metodo toggle es para que se active o desactive con el click
    en el HTML se debe colocar la clase inactive para que se active */

    // esta funcion es para ocultar un elemento cuando otro se activa. 

    
function toggledesktopMenu () {
    detalleCarrito.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
};

function toggleMobilMenu () {
    detalleCarrito.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
};

function shopingCar () {
    mobileMenu.classList.add('inactive');
    detalleCarrito.classList.toggle('inactive');
};

window.addEventListener('click', function (e) {
    console.log(e.target);
    });

// Prinicipios de codigo para las consultas de la API

const listaProductos = [];
listaProductos.push({
    name: 'Bike',
    price: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

listaProductos.push({
    name: 'Tv',
    price: 450,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

listaProductos.push({
    name: 'Guitar',
    price: 600,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

listaProductos.push({
    name: 'laptop',
    price: 890,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

listaProductos.push({
    name: 'phone',
    price: 450,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

listaProductos.push({
    name: 'drone',
    price: 1500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


/*function renderizarBusqueda (arreglo) {
for (product of arreglo) {
    const productCard = document.createElement('div'); // 1
    productCard.classList.add('product-card');

    const productImage = document.createElement('img'); // 2
    //esto es para llamar la imagen del array
    // product = {name, price, image} -> product.image par llamar la imagen
    productImage.setAttribute('src', product.image); // se llama la variable inicial del for 

    const productInfo = document.createElement('div'); // 3
    productInfo.classList.add('product-info');

    const division = document.createElement('div'); //4

    const productPrecio = document.createElement('p'); //5
    productPrecio.innerText = '$' + product.price
    const productNombre = document.createElement('p'); //6
    productNombre.innerText = product.name

    division.appendChild(productPrecio); //4
    division.appendChild(productNombre); //4

    const productFigure = document.createElement('figure'); //7
    const productImg = document.createElement('img'); //8
    productImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    //aca empezamos a cerrar los elementos
    productFigure.appendChild(productImg); //7

    productInfo.appendChild(division); //3
    productInfo.appendChild(productFigure); //3

    productCard.appendChild(productImage); //2
    productCard.appendChild(productInfo); //1

    cardsContainer.appendChild(productCard); //0
};

    // recorrer el array de dos maneras con " for in ... and ... for of" que es mejor con el for of


/*for (produdct in listaProductos) {
    console.log(listaProductos[produdct].name);
}


<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>

Esto es para tener un referente del elemento HTML a crear para despues proyectarlo en el HTML principal */
//};

//renderizarBusqueda(listaProductos);

function otroMetodo (arr) {
    for (productos of arr){
        const pantalla = 
        `<div class="product-card">
            <img src= ${productos.image} >
                <div class="product-info">
                    <div>
                        <p>$${productos.price}</p>
                        <p>${productos.name}</p>
                    </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
        </div>
    </div>`

const mostrarHtml = document.querySelector('.cards-container');
mostrarHtml.innerHTML += pantalla;
}};

otroMetodo(listaProductos);




