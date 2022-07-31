const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const menuCar = document.querySelector('.product-detail');
let validador = menuEmail.classList.contains("inactive");



//menuEmail.addEventListener('click',toggleDesktopMenu);

// function toggleDesktopMenu(){ 
//     var toggle = desktopMenu.classList.contains("inactive");
//    if (toggle){
//     desktopMenu.classList.remove("inactive");
//    }else if(!toggle){
//     desktopMenu.classList.add("inactive");
//    }  
// }

//Solucion profesor

menuEmail.addEventListener('click',toggleProfesor);

function toggleProfesor() {
    const menuCarcheck = menuCar.classList.contains('inactive');

    if(!menuCarcheck){        
        menuCar.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');

}


menuHamIcon.addEventListener('click',inactiveHamMenu);

function inactiveHamMenu() {   
    const menuCarcheck = menuCar.classList.contains('inactive');
     

    if(!menuCarcheck){

        menuCar.classList.add('inactive');

    }

   
    
    menuHam.classList.toggle('inactive');
}

carIcon.addEventListener('click', carMenuActive);

function carMenuActive(){
    const menuHamcheck = menuHam.classList.contains('inactive'); 
    const isdesktopMenuOpend = desktopMenu.classList.contains('inactive');

    if(!menuHamcheck){
        menuHam.classList.add('inactive');
    }
    if(!isdesktopMenuOpend){
        console.log('Que verga');
        desktopMenu.classList.add('inactive');
    }  

    menuCar.classList.toggle('inactive');
    
}
