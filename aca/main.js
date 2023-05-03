const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menuIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', togglemobileMenu);
shoppingCart.addEventListener('click', toggleproductDetail);


function toggleDesktopMenu(){
    const isproductDetailClosed = productDetail.classList.contains('incative');

    if(!isproductDetailClosed){
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function togglemobileMenu(){
    const isproductDetailClosed = productDetail.classList.contains('incative');

    if(!isproductDetailClosed){
        productDetail.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}
function toggleproductDetail(){
    const isMobileMenuClosed = mobileMenu.classList.contains('incative');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});