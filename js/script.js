const menuEmail = document.querySelector('.navbar-email');
const burguerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIphone = document.querySelector('.mobile-menu');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const cardContainer = document.querySelector('.cards-container');
const ProductDetailContainer = document.querySelector('#productDetail');
const ButtonCloseDetail = document.querySelector('.product-detail-close');



burguerIcon.addEventListener('click', toggleAsideMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toogleMenuCarritoIcon);
ButtonCloseDetail.addEventListener('click', cerrarDetalleProducto);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); 
    ProductDetailContainer.classList.add('inactive'); 
    shopingCartContainer.classList.add('inactive'); 
}

function toogleMenuCarritoIcon(){

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



const productos = [];
productos.push({
    nombre: 'Bike',
    precio: '120',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productos.push({
    nombre: 'Pantalla',
    precio: '240',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productos.push({
    nombre: 'Bicicleta',
    precio: '60',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productos.push({
    nombre: 'Bike',
    precio: '120',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productos.push({
    nombre: 'Pantalla',
    precio: '240',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productos.push({
    nombre: 'Bicicleta',
    precio: '60',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});




function renderProducts(array) {

    for (product of array) {

        //Crear el Div 

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //Crear la imagen 


        const imagenProduct = document.createElement('img');
        imagenProduct.setAttribute('src', product.imagen);
        imagenProduct.addEventListener('click', openProductDetailAside);

        //Crear div info 

        const detailProduct = document.createElement('div');
        detailProduct.classList.add('product-info');


        const productInfoDiv = document.createElement('div');


        //Añadir precio 

        const precio = document.createElement('p');
        precio.innerText = '$' + product.precio;


        //añadir nombre 

        const nombre = document.createElement('p');
        nombre.innerText = product.nombre;


        productInfoDiv.append(precio, nombre);

        //product info figure 
        const figureProduct = document.createElement('figure');


        //image Figure Carrito  

        const imageCarrito = document.createElement('img');
        imageCarrito.setAttribute('src', './icons/bt_add_to_cart.svg');

        figureProduct.appendChild(imageCarrito);
        detailProduct.appendChild(productInfoDiv);
        detailProduct.appendChild(figureProduct);



        productCard.append(imagenProduct, detailProduct);
        cardContainer.append(productCard);

    }


}

//Funcion para abrir el detalle del producto

function openProductDetailAside() {

    ProductDetailContainer.classList.toggle('inactive');
    menuIphone.classList.add('inactive'); 
    desktopMenu.classList.add('inactive'); 
    shopingCartContainer.classList.add('inactive'); 

}

//Funcion para cerrar el detalle del producto 

function cerrarDetalleProducto() {

    ProductDetailContainer.classList.add('inactive');
  

}



// le pasamos el arreglo de los productos como argumentos 

renderProducts(productos);