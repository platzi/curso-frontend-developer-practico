// Variables
const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');


navbarEmail.addEventListener('click',() => {
    desktopMenu.classList.toggle('showMenu');
    console.log("clicked, working")
    /* remove classlist if clicked out */
})