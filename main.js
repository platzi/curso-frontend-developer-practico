const desktopMenuToggle = document.querySelector("#desktop-menu-toggle");
const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");
const shoppingCartToggle = document.querySelector("#shopping-cart-toggle");
const desktopMenu = document.querySelector("#desktop-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const productDetails = document.querySelector("#product-details");

function toggleElement(element, toggleButton, otherElementToHide){
    toggleButton.addEventListener("click", () => {
        element.classList.toggle("inactive");
        if (otherElementToHide){
            if (!element.classList.contains("inactive")){
                otherElementToHide.classList.add("inactive");
            }
        }
    })
}


toggleElement(desktopMenu, desktopMenuToggle);
toggleElement(mobileMenu, mobileMenuToggle, productDetails);
toggleElement(productDetails, shoppingCartToggle, mobileMenu);

