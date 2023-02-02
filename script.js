// var desplegar menu al dar click al email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// var Desplegar menu hamburguesa al dar click al icono 
const burgerIcon = document.querySelector('.burgerIcon');
const mobileMenu = document.querySelector('.mobile-menu');
// var Desplegar menu carrito de compras al dar click al icono 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



// desplegar menu al dar click al email
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
   
    // En caso de que el menu mobile y el carrito de compras se encuentren los dos abiertos en la vista de mobile y no se solapen el uno con el otro se puede aplicar el siguiente codigo
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    // al ejecutar la funcion classList.toggle va a quitar o colocar la clase inactive dependiendo del evento click a*adido anteriormente
    desktopMenu.classList.toggle('inactive');
}
console.log('js funcionando');



// Desplegar menu hamburguesa al dar click al icono 
burgerIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
   
    // En caso de que el menu mobile y el carrito de compras se encuentren los dos abiertos en la vista de mobile y no se solapen el uno con el otro se puede aplicar el siguiente codigo
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }


     // al ejecutar la funcion classList.toggle va a quitar o colocar la clase inactive dependiendo del evento click a*adido anteriormente
     mobileMenu.classList.toggle('inactive');
}



// Desplegar menu carrito de compras al dar click al icono 
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    // En caso de que el menu mobile y el carrito de compras se encuentren los dos abiertos en la vista de mobile y no se solapen el uno con el otro se puede aplicar el siguiente codigo
        // si el mobileMenu esta open, hay que cerrarlo 
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive'); 
}