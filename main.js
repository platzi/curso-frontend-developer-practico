// LLAMAR ELEMENTOS DESDE EL CSS

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart")
const checkoutMenu = document.querySelector(".product-detail")


// INTERACTIVIDAD

menuEmail.addEventListener("click", toggleDesktopMenu);

burguerMenu.addEventListener("click", toggleMobileMenu);

shoppingCart.addEventListener("click", toggleShoppingCart);


// FUNCIONES

function toggleDesktopMenu() {
    const isShoppingCartOpen = checkoutMenu.classList.contains('inactive');

    if (!isShoppingCartOpen){
        checkoutMenu.classList.add("inactive");
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartOpen = checkoutMenu.classList.contains('inactive');

    if (!isShoppingCartOpen){
        checkoutMenu.classList.add("inactive");
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuOpen){
        mobileMenu.classList.add("inactive");
    }

    const isEmailMenuOpen = desktopMenu.classList.contains('inactive');

    if (!isEmailMenuOpen){
        desktopMenu.classList.add("inactive");
    }

    checkoutMenu.classList.toggle('inactive');
}