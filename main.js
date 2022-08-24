const navLogin = document.querySelector('.navbar-email');

const menu = document.querySelector('.desktop-menu');

const carritoIcon = document.querySelector('.navbar-shopping-cart');

const categorias = document.querySelector('.menu');

const movilV = document.querySelector('.mobile-menu');

const aside = document.querySelector('.product-detail');

navLogin.addEventListener('click', mostrar);
categorias.addEventListener('click', mostrarMenu);
/*aside.addEventListener('click',  )*/
carritoIcon.addEventListener('click', toggleCcarritoIcon)

function mostrar() {
    const loginn = aside.classList.contains('inactive');

    if (!loginn) {
        aside.classList.add('inactive');
    }

    menu.classList.toggle('inactive')

};

function mostrarMenu() {

    const isAsideC = aside.classList.contains('inactive');
    if (!isAsideC) {
        aside.classList.add('inactive');
    }

    movilV.classList.toggle('inactive')
};

function toggleCcarritoIcon() {
    const isMobileC = movilV.classList.contains('inactive');
    const login = menu.classList.contains('inactive')

    if (!isMobileC) {
        movilV.classList.add('inactive')
    }

    if (!login) {
        menu.classList.add('inactive')
    }

    aside.classList.toggle('inactive');







};

/* i can 
i will
i must

vamos a llevarnos estos cambios a el original
git merge
llego con exito*/