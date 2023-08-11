const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const asideCartDetail = document.querySelector(".product-detail");

const toggleElement = (element) => {
    let elements = [desktopMenu, mobileMenu, asideCartDetail];
    element.classList.toggle('inactive');

    ifActiveElement(elements.filter((_element) => _element !== element));
};

function ifActiveElement(elements) {
    elements.forEach(element => {
        if (!element.classList.contains('inactive')) {
            element.classList.add('inactive');
        }
    });
}

navEmail.addEventListener('click', () => {
    toggleElement(desktopMenu);
});

burgerIcon.addEventListener('click', () => {
    toggleElement(mobileMenu);
});

cartIcon.addEventListener('click', () => {
    toggleElement(asideCartDetail);
})