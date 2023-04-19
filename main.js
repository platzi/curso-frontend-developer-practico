const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const categoriesMenu = document.querySelector ('.menu');
const categories = document.querySelector ('.mobile-menu')

menuEmail.addEventListener ('click', toggleDeskMenu);
categoriesMenu.addEventListener ('click', toggleCatMenu)

function toggleDeskMenu () {
   desktopMenu.classList.toggle('inactive')
}

function toggleCatMenu () {
   categories.classList.toggle('inactive')
}

