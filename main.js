const desktopMenuToggle = document.querySelector("#desktop-menu-toggle");
const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");
const desktopMenu = document.querySelector("#desktop-menu");
const mobileMenu = document.querySelector("#mobile-menu");

function toggleElement(element, toggleButton){
    toggleButton.addEventListener("click", () => {
    element.classList.toggle("inactive");
})}

toggleElement(desktopMenu, desktopMenuToggle);
toggleElement(mobileMenu, mobileMenuToggle);