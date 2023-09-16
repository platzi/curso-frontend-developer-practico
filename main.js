const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carrito = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carrito.addEventListener('click', toggleProductDetail)

function toggleDesktopMenu(){
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    //Lógica para ocultar el menú del carrito para poder abrir el menu mobile
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    //cambia de estado la clase inactive lo que hace que aparezca o desaparezca el menu
    mobileMenu.classList.toggle('inactive')
}

function toggleProductDetail(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    productDetail.classList.toggle('inactive');

}