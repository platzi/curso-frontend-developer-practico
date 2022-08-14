/* menu */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
/* carrito */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
/* opciones menu celular */
const menuHamIcon = document.querySelector('.hamburgesita');
const mobileMenu = document.querySelector('.mobile-menu');

/* escuchadores */
menuEmail.addEventListener('click',toggleDesktopMenu);

menuHamIcon.addEventListener('click',toggleMobileMenu);

menuCarritoIcon.addEventListener('click',toggleCarritoAside)
/* funciones */


function toggleDesktopMenu(){
desktopMenu.classList.toggle('inactive')
aside.classList.add('inactive') 
};

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    aside.classList.add('inactive') 
       
};

function toggleCarritoAside(){
    aside.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    
};    