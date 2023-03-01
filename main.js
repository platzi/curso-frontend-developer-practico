const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamburguesa.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleProductDetail)


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    //alternative without inactive class
    /*if(desktopMenu.style.display === "none"){
        desktopMenu.style.display = "block"
    } else {
        desktopMenu.style.display = "none"
    }
    */
   
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}

function toggleProductDetail(){
    productDetail.classList.toggle('inactive')
}