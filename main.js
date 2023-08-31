const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuCarrito=document.querySelector('.navbar-shopping-cart');
const menuhamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const aside=document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuhamIcon.addEventListener('click',toggleMovileMenu);
menuCarrito.addEventListener('click',toggleCarritoAside);


function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive')
}




function toggleMovileMenu(){

    const isAsideClosed= aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}



function toggleCarritoAside(){

    const ismobileMenuClosed= mobileMenu.classList.contains('inactive');

    if(!ismobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');

}