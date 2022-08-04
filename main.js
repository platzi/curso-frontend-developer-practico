const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.getElementById('prueba');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarrito = document.querySelector('.navbar-shopping-cart');
const asidecarrito = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleAsideCarrito)


function toggDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    asidecarrito.classList.add('inactive');

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    asidecarrito.classList.add('inactive');
}

function toggleAsideCarrito(){
    asidecarrito.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

}