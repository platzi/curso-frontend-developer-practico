const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const hamburgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartMenu = document.querySelector(".product-detail");


navEmail.addEventListener('click', toggleDesktopMenu)
hamburgerMenu.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleShoppingCartMenu)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartMenu(){
    shoppingCartMenu.classList.toggle('inactive')
}
