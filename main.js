const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const  menuHamIcon= document.querySelector('.menu');
const  mobileMenu= document.querySelector('.mobile-menu');
const  menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const  aside= document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAsice);

function toggleDesktopMenu (){
       desktopMenu.classList.toggle ('inactive');
       aside.classList.add('inactive',true)

}

function toggleMobileMenu (){
mobileMenu.classList.toggle ('inactive');
aside.classList.add('inactive',true);
}

function toggleCarritoAsice (){
       aside.classList.toggle ('inactive');
       mobileMenu.classList.add('inactive',true);       
       desktopMenu.classList.add ('inactive',true);
}
