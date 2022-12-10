// Ahora con JS voy armar el codigo para que aparezca el desktop menú al apretar en el navbar email.

/* Solución propia: 

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const vacio = document.getElementById('vacio');

navEmail.addEventListener('click', mostrarMenu)
vacio.addEventListener('click', noMostrarMenu)

function mostrarMenu() {
    desktopMenu.style.display = 'block';
}

function noMostrarMenu() {
    desktopMenu.style.display = 'none'
}

*/

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu)

/* classList.toggle se usa para hacer aparecer o desaparecer la clase que está entre parentesis en función de si esta existe o no al momento de escucharse el evento. Entonces esto hace que cuando está desaparezca y al desaparecer el display none se borra del menu y viceversa. */

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
