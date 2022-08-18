
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleMenuCarrito);


function toggleDesktopMenu() {
    const IsproductDetailClosed = productDetail.classList.contains('inactive');
    
    desktopMenu.classList.toggle('inactive');
    if (!IsproductDetailClosed) {
        productDetail.classList.add('inactive');
    } 
}

function toggleMobileMenu() {
    const IsproductDetailClosed = productDetail.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive');
    if (!IsproductDetailClosed) {
        productDetail.classList.add('inactive');
    } 
}

function toggleMenuCarrito() {
    const IsmobileMenuClosed = mobileMenu.classList.contains('inactive');
    const IsdesktopMenuClosed = desktopMenu.classList.contains('inactive');
    productDetail.classList.toggle('inactive');
    if (!IsmobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!IsdesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    
}
