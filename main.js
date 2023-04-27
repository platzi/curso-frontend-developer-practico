const menuFromEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuBurgerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailSummary = document.querySelector(".product-detail")

menuFromEmail.addEventListener("click", toggleDesktopMenu);
menuBurgerIcon.addEventListener("click", toggleMenuBurger);
shoppingCartIcon.addEventListener("click", toggleSummaryFromShoppingCart);


function toggleDesktopMenu() {
    const isSummaryShoppingCartClosed = productDetailSummary.classList.contains("inactive");
    
    if(!isSummaryShoppingCartClosed) {
        productDetailSummary.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
};

function toggleMenuBurger() {
    const isSummaryShoppingCartClosed = productDetailSummary.classList.contains("inactive");

    if(!isSummaryShoppingCartClosed) {
        productDetailSummary.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
};

function toggleSummaryFromShoppingCart() {
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isMenuBurgerClosed = mobileMenu.classList.contains("inactive");

    if (!isDesktopMenuClosed || !isMenuBurgerClosed) {
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
    }

    productDetailSummary.classList.toggle("inactive");
}
