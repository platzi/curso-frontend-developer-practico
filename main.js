const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu-burger');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);//Evento de click en el menu de usuario de desktop

menuBurger.addEventListener('click', toggleMobileMenu);//Evento de click en el menu hamburgesa de mobile

iconCarrito.addEventListener('click', toggleProductDetail);//Evento de click en el detalle del producto

function toggleMobileMenu() {
    //Constante que contiene Booleano de si esta inactivo el ProductDetail
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    // Si el Detalle del carrito esta abierto lo cerramos
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleDesktopMenu(){
    //Constante que contiene Booleano de si esta inactivo el ProductDetail
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    // Si el Detalle del carrito esta abierto lo cerramos
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleProductDetail(){
    //Constante que contiene Booleano de si esta inactivo el menu del Celular
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    //Constante que contiene Booleano de si esta inactivo el menu de usario de desktop
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    //Si el menu de usuario de desktop esta activo lo cerramos
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    // Si el meunu Mobile esta abierto se cierra
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}