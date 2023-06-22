const navEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {

    desktopMenu.classList.toggle('inactive');

//ASI RESOLVÍ YO EL EJERCICIO
/*if (desktopMenu.style.display === 'none') {
    desktopMenu.style.display = 'block';
}
else {
        desktopMenu.style.display = 'none';
    }*/

}
