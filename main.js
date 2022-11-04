/* Seleciono elementos del menu desktop */
const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');


/* Seleciono elementos del menu Mobile */

const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


/* Seleciono elementos del Shopping Car */

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const asideCar = document.querySelector('.product-detail');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click',toggleMobileMenu);
menuCarIcon.addEventListener('click',toggleAsideMenu);


function toggleAsideMenu(){
    asideCar.classList.toggle('inactive');
    mobileMenu.classList.add('inactive')  
    desktopMenu.classList.add('inactive');  
}


// Esta si la realicé como lo explicó el teacher, 
//Le puse el cursor en mobile pero me parece que no va.
function toggleMobileMenu(){    
    mobileMenu.classList.toggle('inactive');        
    asideCar.classList.add('inactive');
}


function toggleDesktopMenu(){
    //Asi lo realizó el teacher.
    //desktopMenu.classList.toggle('inactive');
    let toggleClass = desktopMenu.getAttribute('class')
    //console.log(toggleClass)
    if (toggleClass === 'desktop-menu inactive') {
        desktopMenu.classList.remove('inactive');
        asideCar.classList.add('inactive');
    }

    if (toggleClass === 'desktop-menu') {
        desktopMenu.classList.add('inactive');
    }

    
}