const menuEmail = document.querySelector('.navbar-email');
const menusito = document.querySelector('.desktop-menu');
const anvorguesa = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');

anvorguesa.addEventListener('click', toogleAnvorguesa);

menuEmail.addEventListener('click', toggleMenuChiquito);

function toogleAnvorguesa() {
    mobilemenu.classList.toggle('inactive');
}

function toggleMenuChiquito(){
    menusito.classList.toggle('inactive');
}

