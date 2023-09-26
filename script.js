console.log('JS Conectado');


//EMAIL MENU
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');



//MOBILE MENU
const burguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


//Puedo leerlo asi:
//A traves del click en el shoppingCartIcon muestro el elemento aside, para hacerlo debo traer ambos elementos a variables de JavaScript

//CARRITO DE COMPRAS
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart'); //Aqui guardo en una variable, el elemento de html mediante el cual hacen click 
const aside = document.querySelector('.product-detail'); //Aqui guardo en una variable, el elemento que mostraré atraves del click 


//EVENT LISTENER DE ICONOS
menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenuIcon.addEventListener('click',toggleMobileMenu); 
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

//FUNCIONES

//Entra a cada funcion cuando hago click en uno de los iconos
function toggleDesktopMenu(){ 
    const isAsideClosed = aside.classList.contains('inactive');    
    
    if(!isAsideClosed){
        desktopMenu.classList.add('inactive');  
        aside.classList.add('inactive');      
        
    }
    desktopMenu.classList.toggle('inactive'); 
       
}

function toggleMobileMenu(){   
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');  
}

function toggleCarritoAside(){
   
    const isMobileMenuClosed =  mobileMenu.classList.contains('inactive'); //Devuelve true cuando mobileMenu esta inactivo   
    const isDesktopMenuClosed =  desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');  
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');  
}