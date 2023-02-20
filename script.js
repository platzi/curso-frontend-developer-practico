const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const burguerMenu=document.querySelector('.menu')
const MenuCarritoIcon=document.querySelector('.navbar-shopping-cart')
const mobileMenu=document.querySelector('.mobile-menu')
const aside=document.querySelector('.product-detail')


menuEmail.addEventListener('click',toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
MenuCarritoIcon.addEventListener('click', toggleCarritoAside)


function toggleDesktopMenu(){
    const isAsideClosed=aside.classList.contains('inactive')

   if(!isAsideClosed){
    aside.classList.add('inactive');
   }
    desktopMenu.classList.toggle('inactive')
}


function toggleMobileMenu(){
    const isAsideClosed=aside.classList.contains('inactive')

   if(!isAsideClosed){
    aside.classList.add('inactive');
   }
   
    
    mobileMenu.classList.toggle('inactive')
}


function toggleCarritoAside(){
    const ismobileMenuClosed=mobileMenu.classList.contains('inactive')
    
    // aside.classList.toggle('inactive')

   if(!ismobileMenuClosed){
    mobileMenu.classList.add('inactive');
   }
   
    aside.classList.toggle('inactive')
   
}