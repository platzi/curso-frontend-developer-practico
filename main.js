//Seleccionamos la clase de la etiqueta a la que se le va a dar click.
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuIcon =document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarrito =document.querySelector('.navbar-shopping-cart');
const productDetail =document.querySelector('.product-detail');


//Le añadimos el evento.
menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleProductDetail);

//Por defecto está inactiva, con cada click aparece y con otro desaparece.

function toggleDesktopMenu() {

    const isProductDetailClosed = productDetail.classList.contains('inactive');
  
    if (!isProductDetailClosed){ 
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const isProductDetailClosed = productDetail.classList.contains('inactive');
  
    if (!isProductDetailClosed){ //Si está abierto el carrito(en mobile), lo cerramos.
        productDetail.classList.add('inactive');
    }
    //una vez cerrado, activamos nuestro menú mobile.
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){ //Si está abierto el menú mobile, lo cerramos.
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed){ //Si está abierto el menú Desktop, lo cerramos.
        desktopMenu.classList.add('inactive');
    }
    //una vez cerrado, activamos nuestro carrito.
    productDetail.classList.toggle('inactive');
}