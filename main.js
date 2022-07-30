const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const menuCar = document.querySelector('.product-detail')
let validador = menuEmail.classList.contains("inactive");


menuEmail.addEventListener('click',toggleDesktopMenu);


function toggleDesktopMenu(){ 
    var toggle = desktopMenu.classList.contains("inactive");
   if (toggle){
    desktopMenu.classList.remove("inactive");
   }else if(!toggle){
    desktopMenu.classList.add("inactive");
   }  
}

// Solucion profesor

// menuEmail.addEventListener('click',toggleProfesor);

// function toggleProfesor() {

//     desktopMenu.classList.toggle('inactive');

// }


menuHamIcon.addEventListener('click',inactiveHamMenu);

function inactiveHamMenu() {    
    menuHam.classList.toggle('inactive');
}

carIcon.addEventListener('click', carMenuActive);

function carMenuActive(){
    menuCar.classList.toggle('inactive')
}
