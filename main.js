const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed  =  aside.classList.contains('inactive');
    if(!isAsideClosed){
     aside.classList.add('inactive');          
    }
 console.log('Click');
    desktopMenu.classList.toggle('inactive');
    
}

function toggleMobileMenu(){
    console.log('Click');
    const isAsideClosed  =  aside.classList.contains('inactive');
    if(!isAsideClosed){
     aside.classList.add('inactive');          
    }

   mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    /*const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isAsideOpen = !mobileMenu.classList.contains('inactive');*/
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isAsideClosed = mobileMenu.classList.contains('inactive');

     if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
     }
    console.log('click');
   aside.classList.toggle('inactive')
   
}

