const desktop_menu = document.querySelector('.desktop-menu');
const menuEmail =document.querySelector('.navbar-email');
const menu =document.querySelector('.menu');
const menuMobil =document.querySelector('.mobile-menu');
const aside =document.querySelector('.product-detail');
const carrito = document.querySelector('.navbar-shopping-cart');


menuEmail.addEventListener('click', toggleDesktop_menu);
menu.addEventListener('click', toggleMobil_menu);
carrito.addEventListener('click', toggleAside);


function toggleDesktop_menu (){
    closeAside = aside.classList.contains('inactive');
    closeMenuEmail = desktop_menu.classList.contains('inactive');
    if(!closeAside){
       closeAside.classList.toggle('inactive');   
    }
    desktop_menu.classList.toggle('inactive');    
    
    }

function toggleMobil_menu (){
    closeMobil = menuMobil.classList.contains('inactive');
    closeAside = aside.classList.contains('inactive');
    if(!closeAside){
        aside.classList.toggle('inactive');
    }
    menuMobil.classList.toggle('inactive');       
    }

function toggleAside (){ 
    closeMobil = menuMobil.classList.contains('inactive');
    closeAside = aside.classList.contains('inactive');
    closeMenuEmail = desktop_menu.classList.contains('inactive');
   
    if(!closeMobil){
        menuMobil.classList.toggle('inactive');
         }
     if(!closeMenuEmail){
            desktop_menu.classList.toggle('inactive');
         }
        aside.classList.toggle('inactive');

    }