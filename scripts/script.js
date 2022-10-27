'use strict'; 

window.addEventListener('load',()=>{

    // Declaración e inicialización de variables; 
    const menu = document.querySelector('.navbar-email'); 
    const desktop_menu = document.querySelector('.desktop-menu'); 
    const IconBurguer = document.querySelector('.menu'); 
    const mobile_menu = document.querySelector('.mobile-menu');  
    const aside = document.querySelector('.product-detail'); 
    const car = document.querySelector('.navbar-shopping-cart');
    
    // Instrucciones;
    menu.addEventListener('click',()=>{
        // Cada vez que se le da click, agrega o quita la clase inactive; 
        desktop_menu.classList.toggle('inactive'); 

        // Condición con operador ternario; 
        !aside.classList.contains('inactive') ? aside.classList.add('inactive') : 0;
        !mobile_menu.classList.contains('inactive') ? mobile_menu.classList.add('inactive') : 0; 
    })
    

    IconBurguer.addEventListener('click',()=>{
        mobile_menu.classList.toggle('inactive'); 

        // Condición con operador ternario; 
        !aside.classList.contains('inactive') ? aside.classList.add('inactive') : 0;
        !desktop_menu.classList.contains('inactive') ? desktop_menu.classList.add('inactive') : 0; 
    }); 

    car.addEventListener('click',()=>{
        aside.classList.toggle('inactive');

        // Condición con operador ternario; 
        !desktop_menu.classList.contains('inactive') ? desktop_menu.classList.add('inactive') : 0; 
        !mobile_menu.classList.contains('inactive') ? mobile_menu.classList.add('inactive') : 0; 
    });

}); 

