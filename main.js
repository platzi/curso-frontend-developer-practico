const barraEmail=document.querySelector('.navbar-email');
const DesktopMenu=document.querySelector('.desktop-menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuMobileIcon=document.querySelector('.menu');

const carrito=document.querySelector('.navbar-shopping-cart');
const asideProductDetailCarrito=document.querySelector('.product-detail');


barraEmail.addEventListener('click', mostrarBarraEmail);
menuMobileIcon.addEventListener('click', mostrarMobileMenu);
carrito.addEventListener('click', mostrarProductDetail);

function mostrarBarraEmail(){
    const asideClosed=asideProductDetailCarrito.classList.contains('inactive');
    if(!asideClosed){
        asideProductDetailCarrito.classList.add('inactive')
    }
    DesktopMenu.classList.toggle('inactive');
}
function mostrarMobileMenu(){

    // LA CONSTANTE CREADA ES PARA SABER SI EL ELEMENTO MENCIONADO CONTIENE LA CLASE "INACTIVE"
    
    const asideClosed=asideProductDetailCarrito.classList.contains('inactive');
    // EL IF CHECKEA SI EL ELEMENTO TIENE O NO ESA CLASE, Y EN CASO DE NO TENERLA SE LA AGREGA PARA QUE NO SE MUESTRE SOBRE EL ELEMENTO QUE QUEREMOS MOSTRAR EN LA FUNCTION. LUEGO LE QUITA LA CLASE INACTIVE AL ELEMENTO A MOSTRAR PARA QUE ESTE APAREZCA
    if(!asideClosed){
        asideProductDetailCarrito.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}
function mostrarProductDetail(){
    const desktopMenuClosed=DesktopMenu.classList.contains('inactive')
    if (!desktopMenuClosed){
        DesktopMenu.classList.add('inactive')
    }
    const mobileMenuClosed=mobileMenu.classList.contains('inactive');
    if (!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    asideProductDetailCarrito.classList.toggle('inactive');
}
