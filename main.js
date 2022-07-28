const navMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".burgerMenuButton");
const mobileMenu = document.querySelector(".mobile-menu");

navMail.addEventListener("click",() => {
    desktopMenu.classList.toggle("inactive");
});

burgerMenu.addEventListener("click",() => {
    mobileMenu.classList.toggle("inactive");
});
