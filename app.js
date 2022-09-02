const nvEmail = document.querySelector('.navbar-email');
const dtMenu = document.querySelector('.desktop-menu');

nvEmail.addEventListener('click', desplegarMenu);

function desplegarMenu(){
    dtMenu.classList.toggle('active');
}