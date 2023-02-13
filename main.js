const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const MenuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside =  document.querySelector(".product-detail");


navEmail.addEventListener('click',()=> {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle("inactive");
} );

menuHamIcon.addEventListener('click', ()=>{
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle("inactive");
});

MenuCarritoIcon.addEventListener('click', ()=>{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle("inactive");
});

