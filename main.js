const menuEmail = document.querySelector('.navbar-email')
const deskopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener ('click',toggleDeskotMenu);

function toggleDeskotMenu () {
    console.log("click");
    deskopMenu.classList.toggle('inactive');
}
console.log("sin js");