const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const imgBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const imgShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");


menuEmail.addEventListener('click', toggleMenuDesktop);
imgBurger.addEventListener('click', toggleMenuMobile);
imgShoppingCart.addEventListener('click', toggleShoppingAside);

function toggleMenuDesktop(){
    const isAsideOpen = !productDetail.classList.contains('inactive');
    console.log(isAsideOpen);
    if(isAsideOpen){
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}// con toggle es mas facil velo pero felicidades por completar el reto
// Mi forma de cumplir el reto
// console.log('yea');
// let clase = desktopMenu.getAttribute('class');
// if(clase === "desktop-menu inactive"){
//     desktopMenu.classList.remove('inactive');
//     } else{
//         desktopMenu.classList.add('inactive');

function toggleMenuMobile(){
    const isAsideOpen = !productDetail.classList.contains('inactive');
    console.log(isAsideOpen);
    if(isAsideOpen){
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingAside(){
    const ismMobileOpen = !mobileMenu.classList.contains('inactive');
    const isMenuOpen = !desktopMenu.classList.contains('inactive');
    console.log(ismMobileOpen);
    if(ismMobileOpen){
        mobileMenu.classList.add('inactive');
    } else if(isMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive');
}