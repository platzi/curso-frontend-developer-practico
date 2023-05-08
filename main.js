const btnBurgerMenu = document.querySelector(".menu-icon");
const btnEmailMenu = document.querySelector(".navbar-email");
const btnShopCar = document.querySelector(".navbar-shopping-cart");
const menuMobile = document.querySelector(".mobile-menu");
const menuDesktop = document.querySelector(".desktop-menu");
const menuProdDetail = document.querySelector(".product-detail");

btnBurgerMenu.addEventListener("click", toggleMenuMobile);
btnEmailMenu.addEventListener("click", toggleMenuDesktop);
btnShopCar.addEventListener("click", toggleMenuProdDetail);

function toggleMenuMobile() {
    menuMobile.classList.toggle("inactive");

    if(!menuMobile.classList.contains("inactive") &&
            !menuProdDetail.classList.contains("inactive")) {
        toggleMenuProdDetail();
    }
}

function toggleMenuDesktop() {
    menuDesktop.classList.toggle("inactive");

    if(!menuDesktop.classList.contains("inactive") &&
            !menuProdDetail.classList.contains("inactive")) {
        toggleMenuProdDetail();
    }
}

function toggleMenuProdDetail() {
    menuProdDetail.classList.toggle("inactive");

    if(!menuProdDetail.classList.contains("inactive")) {
        if(!menuMobile.classList.contains("inactive")) {
            toggleMenuMobile();
        }
        if(!menuDesktop.classList.contains("inactive")) {
            toggleMenuDesktop();
        }
    }
}