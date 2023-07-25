const menuEmail = document.querySelector('.navbar-email');
const burguerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIphone = document.querySelector('.mobile-menu');
const detalleCompra = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');


burguerIcon.addEventListener('click', toggleDesktopMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleAsideMenu);


function toggleDesktopMenu(event) {

    switch (event.target.className) {

        case "navbar-email":

            const isdetalleCompraCloses = detalleCompra.classList.contains('inactive');

            if (!isdetalleCompraCloses) {

                detalleCompra.classList.add('inactive');

            }
            desktopMenu.classList.toggle('inactive');
            break;
        case "menu":

            const isdetalleCompraClose = detalleCompra.classList.contains('inactive');

            if (!isdetalleCompraClose) {

                detalleCompra.classList.add('inactive');
            }
            menuIphone.classList.toggle('inactive');
            break;
    }
}

function toggleAsideMenu() {
    const isMobileCloseMenu = menuIphone.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');
    if (!isMobileCloseMenu) {
        menuIphone.classList.add('inactive');
    }
    if (!isDesktopMenu) {
        desktopMenu.classList.add('inactive');
    }
    detalleCompra.classList.toggle('inactive');
}

const productos = []; 
productos.push({
    nombre:'Bike', 
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




function renderProducts(array){

for (product of array) {

    //Crear el Div 

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //Crear la imagen 


    const imagenProduct = document.createElement('img');
    imagenProduct.setAttribute('src', product.imagen);

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

renderProducts(productos);