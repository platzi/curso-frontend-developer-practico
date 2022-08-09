const menuEmail = document.querySelector('.navbar-email'); //Creamos una variable en la cual seleccinamos el elemento 
const menuHamIcon = document.querySelector('.menu'); //Creamos un selector para el mobileMenu para hacer que aparezca o desaparezca con la misma clase incative
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); //Creamos un selector para el mobileMenu para hacer que aparezca o desaparezca con la misma clase incative
const desktopMenu = document.querySelector('.desktop-menu'); // Cremamos una variable llamada desktopMenu y le decimos que seleccione a cualquier elemento que tenga la clase desktop-menu  
const mobileMenu = document.querySelector('.mobile-menu');  //También necesitamos un selector para ese menú hamburguesa 
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu); //utilizamos su propiedad addEventListener para ejecutar algo cuando le demo click.
menuHamIcon.addEventListener('click', toggleMobileMenu); //utilizamos su propiedad addEventListener para ejecutar algo cuando le demo click.
menuCarritoIcon.addEventListener('click', toggleCarritoAside); //utilizamos su propiedad addEventListener para ejecutar algo cuando le demo click.

//toggleDesktopMenu es el nombre de una función que debemos crear.

function toggleDesktopMenu(){ //acá es donde hacemos que aparezca o desaparezca el pequeño menu.

    const isAsideClosed = aside.classList.contains('inactive'); 

    if(!isAsideClosed){ //Si nuestro MobileMenu no tiene la clase inactive, es decir, si no esta cerrado  
        aside.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive'); //Ejecuta la función classList.toggle, lo que hace es quitar o poner la clase inactive dependiendo si la tiene o no

}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive'); 

    if(!isAsideClosed){ //Si nuestro MobileMenu no tiene la clase inactive, es decir, si no esta cerrado  
        aside.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){  //cada vez que querramos abrir el carrito si le damos click vamos a cerrar el menuMobile
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 

    if(!isMobileMenuClosed){ //Si nuestro MobileMenu no tiene la clase inactive, es decir, si no esta cerrado  
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

