const accountMenu = document.querySelector('.navbar-email');
const accountMenuDropdown = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

accountMenu.addEventListener('click', toggleAccountMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleProductDetail);

function toggleAccountMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
    accountMenuDropdown.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isAccountMenuClosed = accountMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isAccountMenuClosed) {
        accountMenuDropdown.classList.add('inactive')
    }
    productDetail.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})