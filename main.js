var navbarEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
function mostrar(elemento){
    elemento.classList.toggle('d-none');
}

navbarEmail.addEventListener('click', function(){
    mostrar(desktopMenu);
})