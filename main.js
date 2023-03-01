
const menuEmail = document.querySelector('.navbar-email'); /*Seleccion de elementos html por su clase(es clase por eso el . punto) */
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);/*Escuchar su evento de click */
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){//si el carrito esta abierto
        aside.classList.add('inactive'); //cierra el carrito
    }
    //abreo o cierra el DesktopMenu
    desktopMenu.classList.toggle('inactive'); /*Quita o pone la clase independiente si ya la tiene o no */

    /*Otra posible solucion para todos: agregar inactivos todo y añadir toggle solo a 1*/ 
    /*
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
 */

}

function toggleMobileMenu(){ //si abrimos el menu -- cerramos el carrito si estaba abierto
    const isAsideClosed=aside.classList.contains('inactive');
    if(!isAsideClosed){//si el carrito esta abierto
        aside.classList.add('inactive'); //cierra el carrito
    }
     //abreo o cierra el mobileMenu
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const  isdesktopMenuClosed =  desktopMenu.classList.contains('inactive');

    //aside.classList.toggle('inactive');
    if(!isMobileMenuClosed){ //si el mobileMenu esta abierto
        mobileMenu.classList.add('inactive'); //cierra el mobileMenu
    }else if(!isdesktopMenuClosed){ //si el desktopMenu esta abierto
        desktopMenu.classList.add('inactive');
    }
     //abreo o cierra el carrito
    aside.classList.toggle('inactive');
}


