const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const toggleElement = (element) => {
    element.classList.toggle('inactive');
};

navEmail.addEventListener('click', () => {
    toggleElement(desktopMenu);
});

burgerIcon.addEventListener('click', () => {
    toggleElement(mobileMenu);
})