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
const navMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail')

/* Resuelto con dos funciones: 

navEmail.addEventListener('click', toggleDesktopMenu);
navMenu.addEventListener('click', toggleMobileMenu);

*/

/* Resuelto con 1 función */

navEmail.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenu);
shoppingCart.addEventListener('click', toggleMenu);

/* classList.toggle se usa para hacer aparecer o desaparecer la clase que está entre parentesis en función de si esta existe o no al momento de escucharse el evento. Entonces esto hace que cuando está desaparezca y al desaparecer el display none se borra del menu y viceversa. */

/* Resuelto con dos funciones: 

function toggleDesktopMenu(event) {
    console.log(event);
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(event) {
    console.log(event);
    mobileMenu.classList.toggle('inactive');
}
*/

/* Resuelto con 1 función */

function toggleMenu(event) {
    /* console.log(event); */
    if (event.srcElement.className === 'menu') {
        const isAsideProductDetailClose = asideProductDetail.classList.contains('inactive');

        if (!isAsideProductDetailClose) {
            asideProductDetail.classList.add('inactive');
        }

        mobileMenu.classList.toggle('inactive');
    } else if (event.srcElement.className === 'navbar-email') {
        const isAsideProductDetailClose = asideProductDetail.classList.contains('inactive');

        if (!isAsideProductDetailClose) {
            asideProductDetail.classList.add('inactive');
        }

        desktopMenu.classList.toggle('inactive');

    } else if (event.srcElement.className === 'navbar-shopping-cart') {
        const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); /* True si el mobileMenu está inactive */
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');


        if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive');
        } else if (!isDesktopMenuClosed) {
            desktopMenu.classList.add('inactive');
        }
        
        /* Si el menú mobile o el menú desktop no están cerrados entonces los cierro. */

        asideProductDetail.classList.toggle('inactive'); /* Y luego hago toggle de inactive para el aside de product detail */
    }
}

