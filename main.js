let menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', function(e) {
    e.preventDefault();
    //con toogle lo que hacemos es quitar o poner la clase inactive
    menuDesktop.classList.toggle('inactive')
});