//Selectores

const menuEmail = document.querySelector('.navbar-email');
const burguerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIphone = document.querySelector('.mobile-menu');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const cardContainer = document.querySelector('.cards-container');
const ProductDetailContainer = document.querySelector('#product-detail');
const addButtonToCart = document.querySelector('.add-to-cart-button');


burguerIcon.addEventListener('click', toggleAsideMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toogleMenuCarritoIcon);

//definicion de variables; 

let mostrarItemsyDetalles, listaDetalleProductos

//definicion de la clase constructor de los productos
class products {


    constructor(nombre, precio, imagen, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }

}


const productosListos = [
    
    {
    Girasol: new products('Girasol Bonito', 1500, 'https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflowers-3292932_1280.jpg', 'Los Girasoles son Bonitos')
}, 
  {
    Koala: new products('Koala Bonito', 2500, 'https://media.istockphoto.com/id/503562262/it/foto/morbido-peluche-koala.webp?b=1&s=612x612&w=0&k=20&c=mvMJz50pPFhQPvdwlw3xLQBQs01WL4Zzn4I2EPjN_g4=', 'Los koalas son bonitos')
  },

  {
    Silla: new products('Silla', 20000, 'https://media.istockphoto.com/id/1398791465/es/foto/amplio-sill%C3%B3n-tapizado-amarillo-con-tapicer%C3%ADa-de-tela-sobre-patas-de-madera-en-estilo-retro.jpg?b=1&s=170667a&w=0&k=20&c=Dl6S_5qi2l0qamH8-uVb7IPniTuD190kUhuAnFB2zOc=', 'Silla Amarilla')
  },



]



//variable de Lista de Productos 

const productsList = [];


const agregarProductosLista = function (arr) {
    Object.values(arr).forEach((e) => {
        Object.values(e).forEach((p) => {
            productsList.push(p)

        })
    });

}


//Agregar productor al contenedor main 
const productosListaMain = function () {
    productsList.forEach((product) => {
        mostrarItemsyDetalles = `<div class="product-card">
                                    <img src=${product.imagen} alt=${product.descripcion} class="PDetail">
                                    <div class="product-info">
                                        <div>
                                            <p>$${product.precio}</p>
                                            <p>${product.nombre}</p>
                                        </div>
                                        <figure>
                                            <img src="./icons/bt_add_to_cart.svg" alt="add-to-cart">
                                        </figure>
                                        </div>
                                    </div>`
        cardContainer.innerHTML += mostrarItemsyDetalles

    })

    listaDetalleProductos = document.querySelectorAll('.PDetail');

}


//mostrarDetalle productos 


const mostrarDetalleProductos = function () {
    listaDetalleProductos.forEach((detalle) => {
        detalle.addEventListener("click", (c) => {
            for (let items of productsList) {
                if (c.target.currentSrc === items.imagen) {
                    mostrarItemsyDetalles = `
                                                <div class="product-icon-close" onclick="cerrarVentana()">
                                                          <img src = "./icons/icon_close.png"
                                                          alt ="close">
                                                </div>
                                                <img src=${items.imagen} alt="Pioneer dj">
                                        
                                                <div class="product-info">
                                                    <div>
                                                        <p>$${items.precio}</p>
                                                        <p>${items.nombre}</p>
                                                        <p>${items.descripcion}</p>
                                        
                                                        <button class="primary-button add-to-cart-button">
                                                            <img src="./icons/bt_add_to_cart.svg" alt="cart">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>`
                    ProductDetailContainer.innerHTML = mostrarItemsyDetalles
                    ProductDetailContainer.classList.remove('inactive');

                }
            }
        })
    })
}


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    ProductDetailContainer.classList.add('inactive');
    shopingCartContainer.classList.add('inactive');
}

function toogleMenuCarritoIcon() {

    shopingCartContainer.classList.toggle('inactive');
    ProductDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    menuIphone.classList.add('inactive');

}

function toggleAsideMenu() {

    menuIphone.classList.toggle('inactive');
    shopingCartContainer.classList.add('inactive');
    ProductDetailContainer.classList.add('inactive');

}



//Funcion para abrir el detalle del producto

function openProductDetailAside() {

    ProductDetailContainer.classList.toggle('inactive');
    menuIphone.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shopingCartContainer.classList.add('inactive');

}

function cerrarVentana(){


    ProductDetailContainer.classList.add('inactive'); 
}

agregarProductosLista(productosListos);
productosListaMain();
mostrarDetalleProductos();