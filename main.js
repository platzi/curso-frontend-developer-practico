const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const BurgerIcon = document.querySelector('.menu');
const mobileDesktop = document.querySelector('.mobile-menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');

function toogleDesktopMenu(){
    const isCartClosed = asideProductDetail.classList.contains('inactive');

    if(!isCartClosed){
        asideProductDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function toogleMobile(){
    const isAsideClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideClosed){
        asideProductDetail.classList.add('inactive');
    }
    mobileDesktop.classList.toggle('inactive');
}

function hideShowShoppingCart(){
    const isMobileMenuClosed= mobileDesktop.classList.contains('inactive');
    const isAsideClosed= asideProductDetail.classList.contains('inactive');
    
    
    /* condiconales para comprabar como estan */
    //tambien si el mobile menu esta cerrado para cerrarlos
    if(!isMobileMenuClosed){
        mobileDesktop.classList.add('inactive');
    }
    asideProductDetail.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toogleDesktopMenu);
BurgerIcon.addEventListener('click', toogleMobile);
shoppingCarIcon.addEventListener('click', hideShowShoppingCart);


const productList = [];

productList.push(
    {
        productNama: 'Volt Viggo MTB Bike',
        price: 400,
        productImage: 'https://voltabikes.com.ar/wp-content/uploads/2020/06/Bicis-0038-EDITADO-1330x888.jpg' 
    }
);





console.log('Js funciona')


