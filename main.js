const $menuEmail = document.querySelector(".navbar-email")
const $desktopMenu = document.querySelector(".desktop-menu")
const $iconHamburgerMenu = document.querySelector(".menu")
const $mobileMenu = document.querySelector(".mobile-menu")
const $aside = document.querySelector(".product-detail");
const $menuCarritoIcon = document.querySelector(".navbar-shopping-cart")

$menuEmail.addEventListener("click",toggleMenuDesktop)
$iconHamburgerMenu.addEventListener("click",toggleMenuMobile)
$menuCarritoIcon.addEventListener("click",toggleCarritoAside)

function toggleMenuDesktop(){
    $aside.classList.add("inactive")
    $desktopMenu.classList.toggle("inactive")
}

function toggleMenuMobile(){
    $aside.classList.add("inactive")
    $mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside(){
    $desktopMenu.classList.add("inactive")
    $mobileMenu.classList.add("inactive")
    $aside.classList.toggle("inactive")
}