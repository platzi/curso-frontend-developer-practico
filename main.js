const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuTitle = document.querySelector('.title-img');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuTitle.addEventListener('click', toggleMenuTitle)

function toogleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        console.log("entra??????' isProductDetailClosed ")
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle("inactive");
}

function toogleMobileMenu() {

    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    
    if (!isProductDetailClosed) {
        console.log("entra??????' isProductDetailClosed ")
        productDetail.classList.add('inactive');
    }


    mobileMenu.classList.toggle("inactive");
}

function toggleMenuTitle() {
    //aca quiero ver que no este abiertos los dos menus al mismo tiempo, por eso cuanto abro uno me fijo si el otro esta cerrado
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!ismobileMenuClosed) {
        console.log("entra??????' ismobileMenuClosed")
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        console.log("entra??????' isProductDetailClosed ")
        desktopMenu.classList.add('inactive');
    }
        
    productDetail.classList.toggle("inactive");
}