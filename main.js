/* Variables para desplegar menu en desktop */
const navMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

/* Variables para desplegar menu en mobile */
const burgerMenu = document.querySelector(".burgerMenuButton");
const mobileMenu = document.querySelector(".mobile-menu");

/* Variables para desplegar el shopping-cart */
const shoppingCartButton = document.querySelector(".navbar-shopping-cart");
const shoppingCartAside = document.querySelector(".product-detail");

console.log(shoppingCartAside);
console.log(shoppingCartButton);
console.log(burgerMenu);


navMail.addEventListener("click",() => {
    desktopMenu.classList.toggle("inactive");
    shoppingCartAside.classList.add("inactive");
});

burgerMenu.addEventListener("click",() => {
    mobileMenu.classList.toggle("inactive");
    shoppingCartAside.classList.add("inactive");
});

shoppingCartButton.addEventListener("click",() => {
    shoppingCartAside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
});