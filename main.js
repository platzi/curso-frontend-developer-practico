// Funciones para escuchar click en menu mobile y MyAccount
const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenuIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")


navbarEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    const isAsideShopCartClosed = asideShopCart.classList.contains('inactive')

    if (!isAsideShopCartClosed){
        asideShopCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideShopCartClosed = asideShopCart.classList.contains('inactive')

    if (!isAsideShopCartClosed){
        asideShopCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

// Funciones para escuchar click en carrito de compras
const shopCartImg = document.querySelector(".navbar-shopping-cart")
const asideShopCart = document.querySelector(".product-detail")

shopCartImg.addEventListener('click', toggleShopCart);

function toggleShopCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    asideShopCart.classList.toggle('inactive');
}