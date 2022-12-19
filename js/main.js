//Fusión del menú en desktop
let navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click',()=>{
    if(!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');  
});


// Fusion menu en mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click',()=>{
    if(!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');  
});

//MY ORDER
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuCarritoIcon.addEventListener('click',()=>{
    if(!mobileMenu.classList.contains('inactive') ||!desktopMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
  
    aside.classList.toggle('inactive');
});