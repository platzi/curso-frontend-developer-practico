const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);

function toggleDesktopMenu() {
    closeOthermenu(aside);

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    closeOthermenu(aside);

    mobileMenu.classList.toggle("inactive");
}

function toggleCarAside() {
    closeOthermenu(desktopMenu);
    closeOthermenu(mobileMenu);

    aside.classList.toggle("inactive");
}

function closeOthermenu(menu) {
    if (!menu.classList.contains("inactive")) {
        menu.classList.add("inactive");
    }
}
