let menuEmail = document.querySelector('.navbar-email');
let desktop = document.querySelector('.desktop-menu');
let menuMobile = document.querySelector('.mobile-menu');
let logo = document.querySelector('.menu');
let carritoCompras = document.querySelector('.shopping-card');
let aside = document.querySelector('.product-detail');

menuEmail.addEventListener("click",toggleMenu);
logo.addEventListener("click",toggleMenuMobile);
carritoCompras.addEventListener('click',toggleProductDetail);
function toggleMenu(){
    let isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
      }
    
        desktop.classList.toggle('inactive'); 
}
function toggleMenuMobile(){
    let isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
      }
    
        menuMobile.classList.toggle('inactive'); 
}
function toggleProductDetail(){
    let isMobileMenuClosed = carritoCompras.classList.contains('inactive');

      if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
      }
    
        aside.classList.toggle('inactive'); 
    }
    
