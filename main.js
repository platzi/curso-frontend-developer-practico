const menuEmail = document.querySelector('.navbar-email');
const  desktopMenu= document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
MenuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){

    const isasideMenuClosed = aside.classList.contains('inactive'); 
    if(!isasideMenuClosed)
    {
        aside.classList.add('inactive');

    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isasideMenuClosed = aside.classList.contains('inactive'); 
    if(!isasideMenuClosed)
    {
        aside.classList.add('inactive');

    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
   // 
    //
    if(!isMobileMenuClosed){
    
            mobileMenu.classList.add('inactive');
        }
        aside.classList.toggle('inactive');
    }
    
