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
    menu.classList.toggle('inactive')

};

function mostrarMenu() {
    movilV.classList.toggle('inactive')
};

function toggleCcarritoIcon() {
    aside.classList.toggle('inactive')


};

/* i can 
i will
i must

vamos a llevarnos estos cambios a el original
git merge
llego con exito*/