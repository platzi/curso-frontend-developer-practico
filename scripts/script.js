'use strict'; 

window.addEventListener('load',()=>{

    const menu = document.querySelector('.navbar-email'); 
    const desktop_menu = document.querySelector('.desktop-menu'); 
    
    menu.addEventListener('click',()=>{
        // Cada vez que se le da click, agrega o quita la clase inactive; 
        desktop_menu.classList.toggle('inactive'); 
    })
    

    // Icono hamburguesa
    const IconHamburguer = document.querySelector('.menu'); 
    const mobile_menu = document.querySelector('.mobile-menu'); 

    IconHamburguer.addEventListener('click',()=>{
        mobile_menu.classList.toggle('inactive'); 
    }); 
}); 

