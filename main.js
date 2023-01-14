const menuEmail = document.querySelector('.navbar-email');
menuEmail.addEventListener('click', toogleDesktopMenu);

const desktopMenu = document.querySelector('.desktop-menu');

const hamburguesaMenu = document.querySelector('.menu');
hamburguesaMenu.addEventListener('click', toogleMobileMenuHamburguesa);

const mobileMenu = document.querySelector('.mobile-menu');

const carritoComprasIcon = document.querySelector('.navbar-shopping-cart');
carritoComprasIcon.addEventListener('click', toogleDetailCarritoCompra);

const detalleCarrito = document.querySelector('.product-detail');

const listaProductos = [
    {
        imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        precio: 120,
        descripcion: 'Bike'
    },
    {
        imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        precio: 1200,
        descripcion: 'Pantalla'
    },
    {
        imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        precio: 20,
        descripcion: 'Mouse'
    },
    {
        imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        precio: 200,
        descripcion: 'Chair'
    },
    {
        imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        precio: 150,
        descripcion: 'Pants'
    },
    {
        imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        precio: 50,
        descripcion: 'T-Shirt'
    },
]

function renderListProductos(arr) {
    for (const producto of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productoImagen = document.createElement('img');
        productoImagen.setAttribute('src', producto.imagen);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const divDataProducto = document.createElement('div');
        const pPrecio = document.createElement('p');
        pPrecio.innerText = `$ ${producto.precio}`;
        const pDescripcion = document.createElement('p');
        pDescripcion.innerText = producto.descripcion;
        divDataProducto.append(pDescripcion);
        divDataProducto.append(pPrecio);
        
        const figura = document.createElement('figure');
        figura.innerHTML = '<img src="./icons/bt_add_to_cart.svg" alt="">';
        
        productInfo.append(divDataProducto);
        productInfo.append(figura);
        
        productCard.append(productoImagen);
        productCard.append(productInfo);
    
        const contenedorProductos = document.querySelector('.cards-container');
        contenedorProductos.append(productCard);
    }
}

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    detalleCarrito.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function toogleMobileMenuHamburguesa() {
    console.log('aaaa');
    mobileMenu.classList.toggle('inactive');
    detalleCarrito.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function toogleDetailCarritoCompra() {
    detalleCarrito.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

renderListProductos(listaProductos);