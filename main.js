const navbarEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const carritoMenuIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailAside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector(".cards-container");

const productDetailAsideTwo = document.querySelector('.product-detail-two');
const productDetailClose = document.querySelector('.product-detail-close');


navbarEmail.addEventListener('click', () => {mostrarMenu(desktopMenu)});
burguerMenu.addEventListener('click', () => {mostrarMenu(mobileMenu)});
carritoMenuIcon.addEventListener('click', () => {mostrarMenu(productDetailAside)});

function mostrarMenu(dispositivo){
    //Guardamos true si contiene la clase inactive de lo contrario false.
    isDispositivoClosed = dispositivo.classList.contains("inactive");
    //Cerramos los 3 controles o menus.
    ocultarMenus();
    //Solo si el dispositivo o menu esta cerrado lo muestro.
    isDispositivoClosed ? dispositivo.classList.toggle('inactive'):null;
}

function ocultarMenus(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailAside.classList.add('inactive');
    productDetailAsideTwo.classList.add('inactive');
 }


const productList = [];

productList.push({
    id: 1,
    name:'Audi A5 Coupe',
    price: 10000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_997952-MLC54550778590_032023-O.jpg',
    desc: 'Auto versión lujo con tan solo 10 mil kilometros, llegar y andar'
    ,
});

productList.push({
    id: 2,
    name:'BMW 520I',
    price: 12000,
    image: 'https://chileautos.pxcrush.net/cars/dealer/bplup6x67zn7lhlsygqfii78v.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=720,480',
    desc: 'Impecable poco uso, muy rapido, llega de 0 a 100 en 2 segundos'
    ,
});

productList.push({
    id: 3,
    name:'Mercedes Benz E250',
    price: 20000,
    image: 'https://image-cdn.beforward.jp/large/201912/1604322/BG674161_1d5722.jpg',
    desc: 'Solo para entendidos posee un motor V20'
    ,
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
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
*/


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('id', product.id);
        productImg.classList.add('imagenesProductoDetalle');

        productImg.addEventListener('click', () => {mostrarMenu(productDetailAsideTwo)});
        

        productDetailClose.addEventListener('click', () => {mostrarMenu(productDetailAsideTwo)});
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        /*productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);*/
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productInfoImg = document.createElement('img');
        productInfoImg.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productInfoImg);
    
        /*productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);*/
        productInfo.append(productInfoDiv, productInfoFigure);
    
        /*productCard.appendChild(productImg);
        productCard.appendChild(productInfo);*/
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

/* 
como lo puedon hacer? si es posible

Las 3 tienen un ID
*/
// Obtén el elemento de la imagen del producto
const imagenesProductoDetalle = document.querySelectorAll(".imagenesProductoDetalle");

// Obtén el source de la imagen del producto
//const srcImgProducto = imgProducto.getAttribute("src");

// Obtén el elemento de la imagen detalle producto
const imgProductDetail = document.querySelector(".imgProductDetail");
const priceProductDetail = document.getElementById("priceProductDetail");
const nameProductDetail = document.getElementById("nameProductDetail");
const descProductDetail= document.getElementById("descProductDetail");

imagenesProductoDetalle.forEach(element => {
    // Agrega el evento de escucha de clics al imgProducto y ejecutamos la función que cambia la imagen.
    element.addEventListener("click", function() {
        const posicion = element.id - 1
        const producto = productList[posicion]
        sustituirDetalleProducto(producto);
    });
});

let objetoProducto = {};
let carrito = [];

function sustituirDetalleProducto(obj){
    imgProductDetail.setAttribute('src',obj.image);
    priceProductDetail.innerText = obj.price;
    nameProductDetail.innerText = obj.name;
    descProductDetail.innerText = obj.desc;
    objetoProducto = obj;
}

const addToCarButton = document.querySelector('.add-to-cart-button');

addToCarButton.addEventListener('click', function(){ 
    agregarProductoCarro(objetoProducto);
});

function agregarProductoCarro(obj){
    carrito.push(obj);
    console.log(carrito);

    const searchIndex = carrito.findIndex((producto) => producto.id==obj.id);
}
