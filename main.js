const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart')
const orderCarrito = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
iconCarrito.addEventListener('click', toggleIconCarrito);


function toggleDesktopMenu(){
    const isordercarritoClosed = orderCarrito.classList.contains('inactive');

    if (!isordercarritoClosed){
        orderCarrito.classList.add('inactive')
    };   
    desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu(){
    const isordercarritoClosed = orderCarrito.classList.contains('inactive');

    if (!isordercarritoClosed){
        orderCarrito.classList.add('inactive')
    };
    mobileMenu.classList.toggle('inactive')
};

function toggleIconCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuclosed = desktopMenu.classList.contains('inactive')
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    };
    if (!isDesktopMenuclosed){
        desktopMenu.classList.add('inactive')
    }
    orderCarrito.classList.toggle('inactive')
}