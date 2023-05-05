const clickMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburguesa = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

clickMail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toogleMobileMenu);
menuCarrito.addEventListener('click', toggleCarrito);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    const menuCarritoClosed = productDetail.classList.contains('inactive');
    // Si product detail no tiene la clase active (o sea que está abierto)
    if(!menuCarritoClosed){
       productDetail.classList.add('inactive');
    }
}
function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}
function toggleCarrito(){
    productDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    const menuDesktopClosed = desktopMenu.classList.contains('inactive');
    if(!menuDesktopClosed){
       desktopMenu.classList.add('inactive');
    }
}
