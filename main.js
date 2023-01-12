const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
shoppingIcon.addEventListener("click", toggleShoppingIcon);

function toggleDesktopMenu(){
    const isProductDetailOpen = productDetail.classList.contains("inactive")

    if (!isProductDetailOpen){
        productDetail.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isProductDetailOpen = productDetail.classList.contains("inactive")

    if (!isProductDetailOpen){
        productDetail.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingIcon(){
    const isMobileMenuOpen = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuOpen){
        mobileMenu.classList.add("inactive")
    }

    productDetail.classList.toggle("inactive")
}






