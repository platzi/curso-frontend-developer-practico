const menu = document.querySelector(".navbar-email");
const email = document.querySelector(".desktop-menu");
const hamburgIcon = document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");
const menuCarritoIcon= document.querySelector(".navbar-shopping-cart");
const aside= document.querySelector(".product-detail");

menu.addEventListener("click", toggleDestopMenu);
hamburgIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoMenu);

function toggleDestopMenu(){
    const isAsideClosed=aside.classList.contains('inactive');

        
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    email.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed=aside.classList.contains('inactive');

        
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoMenu(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
