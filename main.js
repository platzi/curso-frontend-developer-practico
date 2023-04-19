const menuEmail = document.querySelector('.navbar-email') //donde debo dar click
const deskopMenu = document.querySelector('.desktop-menu') // donde quiero que cambie con el click
const menuImg = document.querySelector('.menu')
const movileMenu = document.querySelector ('.mobile-menu')

menuEmail.addEventListener ('click',toggleDeskotMenu);
menuImg.addEventListener ('click',toggleMobileMenu);

/* otra forma de capturar datos

email.addEventListener("click", () => toggleElement(desktopMenu));

menu.addEventListener("click", () => toggleElement(mobileMenu));

const toggleElement = (e) => {
  e.classList.toggle("inactive");
};
 */

function toggleDeskotMenu () {
    console.log("click");
    deskopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    console.log("click");
    movileMenu.classList.toggle('inactive');
}

console.log("sin js");