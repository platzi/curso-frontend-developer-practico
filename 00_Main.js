const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click',toggleDesktopMenu); /*A la variable menuEmail en el evento de darle click, mandamos a llamar a la funcion 
                                                        toggleDesktopMenu*/
menuHamIcon.addEventListener('click',toggleMobileMenu);

menuCarritoIcon.addEventListener('click',toggleProductDetail);
        
function toggleDesktopMenu(){
    const isAsideOpenClosed = aside.classList.contains('inactive');

    if(!isAsideOpenClosed){
        aside.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive'); //classList.toggle lo que hara es poner la clase dependiendo si ya la tiene o no.
}

function toggleMobileMenu(){
    const isMobileMenuOpenClosed = mobileMenu.classList.contains('inactive');
    const isAsideOpenClosed = aside.classList.contains('inactive');

    if(isAsideOpenClosed==true){
        mobileMenu.classList.toggle('inactive');
    }
    else{
        aside.classList.toggle('inactive');
        mobileMenu.classList.toggle('inactive');
    }
}

function toggleProductDetail() {
    const isMobileMenuOpenClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    }

    if(isMobileMenuOpenClosed==true){
        aside.classList.toggle('inactive');
    }
    else{
        aside.classList.toggle('inactive');
        mobileMenu.classList.toggle('inactive');
    }
    
    
}