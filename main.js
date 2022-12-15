const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const AsidePDetail =document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDestopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarrito.addEventListener('click', toggleAsideProduct);

function toggleDestopMenu(){
    const isAsideOpen = AsidePDetail.classList.contains('inactive');

    if (!isAsideOpen){
        AsidePDetail.classList.add('inactive');
    }

    console.log('click');
    desktopMenu.classList.toggle ('inactive');

   
    
    
}

function toggleMobileMenu(){
    const isAsideOpen = AsidePDetail.classList.contains('inactive');


    if (!isAsideOpen){
        AsidePDetail.classList.add('inactive');
    }

    console.log('click')
    mobileMenu.classList.toggle('inactive');

    
}

function toggleAsideProduct(){

    const ismobileMOpen = mobileMenu.classList.contains('inactive')

    if (!ismobileMOpen){
        mobileMenu.classList.add('inactive');
    }
    
    console.log('click')
    AsidePDetail.classList.toggle('inactive');

    
}