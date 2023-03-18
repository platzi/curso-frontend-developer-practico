
// CONST
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCar = document.querySelector('.navbar-shopping-cart')
const productDetails = document.querySelector('.product-detail')

//NAME FUNCION
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
shoppingCar.addEventListener('click', showMyOrders)

//DESKTOP MENU

function toggleDesktopMenu(){
    const isProductDetailsClosed =  productDetails.classList.contains('inactive');

    if (!isProductDetailsClosed){
        productDetails.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

// MOBILE MENU
function toggleMobileMenu(){

    const isProductDetailsClosed =  productDetails.classList.contains('inactive');

    if (!isProductDetailsClosed){
        productDetails.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}


// MY CAR DESPLEGABLE



function showMyOrders(){
    mobileMenu.classList.add('inactive')
    productDetails.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');

};

