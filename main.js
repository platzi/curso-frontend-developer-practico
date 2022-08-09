let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let menuHamburguesa = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu")
let menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
let productDetail = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleBurguerMenu);
menuCarritoIcon.addEventListener("click", toggleProductDetail)


function toggleBurguerMenu() {
    let isproductDetailClosed = productDetail.classList.contains("inactivo");

    if (!isproductDetailClosed) {
        productDetail.classList.add("inactivo")
    } 

    mobileMenu.classList.toggle("inactivo");
    console.log("hola")
}




function toggleDesktopMenu() {
    let isproductDetailClosed = productDetail.classList.contains("inactivo");

    if (!isproductDetailClosed) {
        productDetail.classList.add("inactivo")
    } 

    desktopMenu.classList.toggle("inactivo");
    console.log("hola")
}


function toggleProductDetail() {
    let isMobileMenuClosed = mobileMenu.classList.contains("inactivo");

    let isDesktopMenuClosed = desktopMenu.classList.contains("inactivo");

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactivo")
    } 

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactivo")
    } 

    productDetail.classList.toggle("inactivo");
    console.log("hola")
}