// Cada vez que haga clic a .navbar-email, debe aparecer .desktop-menu

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');    
    }
}

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');    
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');    
    }

    aside.classList.toggle('inactive'); 
    
}

/*Explicación Open-GPT

Este código es parte de una página web y se ejecuta en el navegador web del usuario.

Cuando se carga la página, primero se ejecuta la línea const menuEmail = document.querySelector('.navbar-email');, que busca en el documento HTML un elemento con la clase navbar-email y lo asigna a la variable menuEmail. Luego, se ejecuta la línea const desktopMenu = document.querySelector('.desktop-menu');, que hace lo mismo con un elemento con la clase desktop-menu y lo asigna a la variable desktopMenu.

Luego, se ejecuta la línea menuEmail.addEventListener('click', toggleDesktopMenu);, que establece un "manejador de eventos" para el elemento con la clase navbar-email. Esto significa que cuando el elemento se haga clic, se ejecutará la función toggleDesktopMenu.

La función toggleDesktopMenu es una función simple que imprime "Click" en la consola y luego toma el elemento con la clase desktop-menu y añade o elimina la clase inactive. La clase inactive puede ser utilizada para ocultar o mostrar el elemento en la página web.

Finalmente, se imprime "JS funcionando" en la consola para indicar que el código JavaScript se ha ejecutado correctamente.
*/