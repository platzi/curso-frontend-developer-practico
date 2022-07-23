const navbarMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarMail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    //Solución del instructor:
    //Este quita o pone la clase 'Inactive' dependiendo si ya la tiene
    desktopMenu.classList.toggle('inactive');
    //MI SOLUCIÓN:
    // let isNone = desktopMenu.style.display == "none";
    // isNone ? desktopMenu.style.display = "block" : desktopMenu.style.display = "none";
}