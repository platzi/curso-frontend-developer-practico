const menuEmail = document.querySelector('.navbar-email');//Seleccionamos navbar email que esta dentro de navbar-righ
const desktopMenu = document.querySelector('.desktop-menu');//Seleccionamos todo el menu que parece y desaparece en la parte derecha cclic en email

const menuHamIcon = document.querySelector('.menu');//Seleccionamos el icono hamburguesa
const mobileMenu = document.querySelector('.mobile-menu');//Seleccionamos menu de mobile

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');//Seleccionamos el icono carrito
const aside = document.querySelector('.product-detail');//Seleccionamos la parte que aparece las bicicletas y sus precios 



menuEmail.addEventListener('click', toggleDesktopMenu);//Escuchamos evento clic cuando damos clic sobre email parte derecha
menuHamIcon.addEventListener('click', toggleMobileMenu);//Escuchamos evento cuando damos clic al boton hamburguesa
menuCarritoIcon.addEventListener('click', toggleCarritoAside);//Escuchamos evento cuando damos clic al carrito

function toggleDesktopMenu(){//FUncion que activa y desactiva el menu desktop
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){//FUncion que activa y desactiva el menu mobile
    const isAsideClosed = aside.classList.contains('inactive');
    
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive'); 
}

function toggleCarritoAside(){//FUncion que activa y desactiva product-detail
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}