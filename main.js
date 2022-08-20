

const navEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const navHamIcon = document.querySelector(`.ham-menu-icon`);
const mobileNav =  document.querySelector(`.mobile-menu`);
const navCarShop = document.querySelector(`.navbar-shopping-cart`);
const ProdutDetail = document.querySelector(`.product-detail`);


navEmail.addEventListener(`click`, toggleDesktopMenu);
navHamIcon.addEventListener(`click`, toggleMobileMenu);
navCarShop.addEventListener(`click`, toggleProductDetail);


function toggleDesktopMenu() {
    const isProductDetailClosed = ProdutDetail.classList.contains(`inactive`);
    if(!isProductDetailClosed) {
        ProdutDetail.classList.add(`inactive`);
    }

    desktopMenu.classList.toggle(`inactive`);
}

function toggleMobileMenu() {
    const isProductDetailClosed = ProdutDetail.classList.contains(`inactive`);


    if(!isProductDetailClosed){
        ProdutDetail.classList.add(`inactive`);
    }
    mobileNav.classList.toggle(`inactive`);
}

function toggleProductDetail() {

    const isMobileNavClosed = mobileNav.classList.contains(`inactive`);
    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);

    if(!isMobileNavClosed){
        mobileNav.classList.add(`inactive`);
    }
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add(`inactive`);
    }
    ProdutDetail.classList.toggle(`inactive`);

}