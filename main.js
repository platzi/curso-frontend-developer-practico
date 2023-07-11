//Inicializamos variables a utilizar
var menuEmail = document.querySelector(".navbar-email"); 
var desktopMenu = document.querySelector(".desktop-menu");
var menuMobile = document.querySelector(".mobile-menu");
var menuMobiles = document.querySelector(".menu");
var emailMobile = document.querySelector(".email");
var listaShop = document.querySelector(".cards-container");
var carrito = document.querySelector(".navbar-shopping-cart");
var menuCarrito = document.querySelector("#ShoppingCartContainer");
var menuCompra = document.querySelector("#productDetail");
var productClosed = document.querySelector(".product-detail-close");



var artículos = [];//Creamos una matriz donde se van a almacenar los datos de los artículos de la tienda
let lista; //Inicializo variable que me permite guardar cada elemento de la lista

//Introducción de artículos a la tienda
artículos.push({
    nombre: "Bike",
    price : "$1.500.000",
    link: "https://images.prismic.io/lauf/1fc948ec-e3d8-4897-8fc8-b19374b74296_seigla-blue%402x.png?auto=compress,format&rect=30,0,1600,1600&w=1000&h=1000"
});
artículos.push({
    nombre: "Pantalla",
    price : "$2.000.000",
    link: "https://images.samsung.com/is/image/samsung/latin-curved-j890dkl-lc49j890dklxzp-dynamicblack-207663535?$650_519_PNG$"
});
artículos.push({
    nombre: "Teléfono",
    price : "$3.500.000",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNy1URx5fIo-Dj0WIAia21tzSWSh_NBJ3Ejg&usqp=CAU"
});

renderProduct(artículos);//Mostramos en pantalla todo los artículos 


var buttonCarrito = document.querySelectorAll("#buttonShop");//Inicializar y declarar una variable que me va a guardar el evento de click cuando se le de click a añadir producto

//Escuchar el evento de click de cada articulo que se quiera agregar al carrito
buttonCarrito.forEach(function(articulo) {
    articulo.addEventListener('click', toggleproductDetail);
  });

//Función para mostrar en el HTML todos los elementos que contiene una matriz, en este caso la de articulos[]
function renderProduct(arr) {
    arr.forEach(element => {
        lista = `
        
          <div class="product-card">
            <div>
              <img src=${element.link}" alt="">
            <div class="product-info">
              <div>
              <p>${element.price}</p>
              <p>${element.nombre}</p>
              </div>
              <figure id="añadirAlCarrito">
                <img src="./icons/bt_add_to_cart.svg" alt="" id="buttonShop" >
              </figure>
            </div>
            </div> 
    
            
          </div>
          `
        listaShop.innerHTML += lista;//Agrego al HTML cada elemento encontrado
       });
       return listaShop;

}


//Funciones para que se cierre el menú abierto cuando se abra otro

function toggleDesktopMenu() {
    var menuCarritoClosed = menuCarrito.classList.contains('inactive')

    var menuCompraClosed = menuCompra.classList.contains('inactive');
    console.log("funciona");
    if (!menuCarritoClosed || !menuCompraClosed) {
        menuCarrito.classList.add('inactive');
        menuCompra.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
    
}
function toggleMenuMobile() {
    
    var menuCarritoClosed = menuCarrito.classList.contains('inactive')
    var menuCompraClosed = menuCompra.classList.contains('inactive');
    if (!menuCarritoClosed || !menuCompraClosed) {
        menuCarrito.classList.add('inactive');
        menuCompra.classList.add("inactive");
    }
    menuMobile.classList.toggle("inactive");
    console.log("funciona");
}
function toggleCarrito() {
    var desktopMenuClosed = desktopMenu.classList.contains('inactive')
    var menuMobileClosed = menuMobile.classList.contains('inactive')
    var menuCompraClosed = menuCompra.classList.contains('inactive');
    if (!desktopMenuClosed || !menuMobileClosed || !menuCompraClosed) {
        desktopMenu.classList.add('inactive');
        menuMobile.classList.add('inactive');
        menuCompra.classList.add("inactive");
    }
    menuCarrito.classList.toggle("inactive");

    console.log("funciona");
}


function toggleproductDetail() {
    var menuCarritoClosed = menuCarrito.classList.contains('inactive');
    var desktopMenuClosed = desktopMenu.classList.contains('inactive');
    var menuMobileClosed = menuMobile.classList.contains('inactive');
    if (!desktopMenuClosed || !menuMobileClosed || !menuCarritoClosed) {
        desktopMenu.classList.add('inactive');
        menuMobile.classList.add('inactive');
        menuCarrito.classList.add('inactive');
    }
    menuCompra.classList.toggle("inactive");

    console.log("funciona");
}
//

//Eventos de escucha para cada uno de los menús
menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobiles.addEventListener('click', toggleMenuMobile);
carrito.addEventListener('click', toggleCarrito);
