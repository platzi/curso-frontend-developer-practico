const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const prouctDetail = document.querySelector('.product-detail'); 
const shopCart = document.querySelector('.navbar-shopping-cart'); 



menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
shopCart.addEventListener('click', toggleProductDetail);


function toggleDesktopMenu() {
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isProductDetailClosed = prouctDetail.classList.contains('inactive'); 

    if (!isProductDetailClosed) {
            
        prouctDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}


function toggleProductDetail() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
            
        mobileMenu.classList.add('inactive');
    }
    prouctDetail.classList.toggle('inactive');  
    
}