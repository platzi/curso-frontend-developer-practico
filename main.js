// DESKTOP MENU ------------------------------------------------------>
const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
// MOBILE MENU ------------------------------------------------------>
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
// ICON CAR SHOPING ------------------------------------------------------>
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");


navBarEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleProductDetail);


function toggleDesktopMenu ()
{
    const isProductDetailClosed = productDetail.classList.contains("inactive");

    desktopMenu.classList.toggle("inactive");

    if (!isProductDetailClosed)
    {
        productDetail.classList.add("inactive");
    }
}

function toggleMobileMenu ()
{
    const isProductDetailClosed = productDetail.classList.contains("inactive");

    mobileMenu.classList.toggle("inactive");

    if (!isProductDetailClosed)
    {
        productDetail.classList.add("inactive");
    }
}

function toggleProductDetail ()
{
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    productDetail.classList.toggle("inactive");

    if (!isMobileMenuClosed)
    {
        mobileMenu.classList.add("inactive");
    }
}

