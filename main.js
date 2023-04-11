const menuEmail = document.querySelector('.navbar-email')
const DesktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    
    const IsCarritoDetailClosed = CarritoDetail.classList.contains('inactive');
    if(!IsCarritoDetailClosed){

        CarritoDetail.classList.add('inactive')
    }
    
    DesktopMenu.classList.toggle('inactive');
}


const menuburguer= document.querySelector('.menu')
const MobileMenu = document.querySelector('.mobile-menu')

menuburguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    const IsCarritoDetailClosed = CarritoDetail.classList.contains('inactive');
    if(!IsCarritoDetailClosed){

        CarritoDetail.classList.add('inactive')
    }
    
    MobileMenu.classList.toggle('inactive');
}


const CarritoDetail = document.querySelector('.product-detail')
const menuCarrito = document.querySelector('.navbar-shopping-cart')

menuCarrito.addEventListener('click', toggleCarritoDetail);

function toggleCarritoDetail(){

    const IsMobileMenuClosed = MobileMenu.classList.contains('inactive');
   
    if(!IsMobileMenuClosed){
        MobileMenu.classList.add('inactive')
    }
    
   
    CarritoDetail.classList.toggle('inactive');

  
}
